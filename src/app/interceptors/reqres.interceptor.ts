import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqresInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqresUrl = 'reqres.in/api';

    if (request.url.includes(reqresUrl)) {
      const modifiedRequest = request.clone({
        setHeaders: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}