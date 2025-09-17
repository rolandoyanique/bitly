import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { error } from 'console';
@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token='a70c00dd1df6dcc59adf73b218cabec7408e4b46';
    request = request.clone({setHeaders:{Authorization: `Bearer ${token}`,'Content-Type': 'application/json'}})
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }
}
