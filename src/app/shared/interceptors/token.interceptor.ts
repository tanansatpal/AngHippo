import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '@shared/services';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // todo hack to be removed
    if (!request.url.match(/entity\/ms./)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getAuthToken()}`
        }
      });
    } else if (request.url.match(/entity\/ms./)) {
      request = request.clone({
        setHeaders: {
          'access-key': localStorage.getItem('tempAccessKey')
        }
      });
    }
    return next.handle(request);
  }
}

export let tokenProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
};
