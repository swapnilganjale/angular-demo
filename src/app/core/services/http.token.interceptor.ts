import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService,private router: Router ) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("URL = "+this.router.url);
    if(this.router.url === '/login'){
       console.log("IFFF ");
       const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };

      headersConfig['Authorization'] = `Basic Y2xpZW50OnNlY3JldA==`;
      const request1 = request.clone({ setHeaders: headersConfig });
      return next.handle(request1);
    }else{
      console.log("ELSEEEEE");
      
      const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };
      
      const token =this.jwtService.getToken();
      if (token) {
        headersConfig['Authorization'] = 'Bearer ' + token;
      }

      const request1 = request.clone({ setHeaders: headersConfig });
      return next.handle(request1);

    }
  }
 
}
