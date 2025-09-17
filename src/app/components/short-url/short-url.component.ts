import { Component } from '@angular/core';
import { error } from 'console';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  nombreURL: string = '';
  urlShort: string = '';
  urlProcessing: boolean = false;
  spinner: boolean = false;
  mostrarError: boolean = false;
  textError: string = '';
  constructor(private _shortUrlService: ShortUrlService) { }
  procesaURL() {
    if (this.nombreURL === '') {
      this.mostrarError = true;
      this.textError = 'Debe ingresar una URL valida';
      setTimeout(() => {
        this.mostrarError = false;
      }, 4000)
      return;
    }
    this.spinner = true;
    this._shortUrlService.getUrlShort(this.nombreURL).subscribe(data => {
      this.spinner = false;
      this.urlProcessing = true;
      this.urlShort = data.link;
    }, error => {
      this.error();
    });
  }
  error() {
    this.mostrarError = true;
    this.spinner = false;
    this.textError = 'Existe un error con la url';
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000)
  }
}
