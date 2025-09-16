import { Component } from '@angular/core';
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
  constructor(private _shortUrlService:ShortUrlService){}
  procesaURL(){
    this._shortUrlService.getUrlShort(this.nombreURL).subscribe(data=>{
      this.urlProcessing=true;
      this.urlShort=data.link;
    });
  }
}
