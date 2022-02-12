import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercepting here...");
    //token variable
    let token = sessionStorage.getItem("JwtTOKEN");
    if(sessionStorage.getItem("USERNAME") && sessionStorage.getItem("JwtTOKEN")){
      request = request.clone(
        {
          //set the header
          setHeaders: {
            Authorization : `Bearer ${token}`
          }
        }
      )
    }
    return next.handle(request);
  }
}
