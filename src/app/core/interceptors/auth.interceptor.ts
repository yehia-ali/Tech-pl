import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokensService } from '../services/tokens.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  isAccessTokenFound: any = '';

  constructor(private tokensService: TokensService) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.tokensService.tokens.subscribe(
      (token: any) =>
        (this.isAccessTokenFound = token)
    );
    if (this.isAccessTokenFound) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${this.isAccessTokenFound}`)
          .set('Access-Control-Allow-Origin', '*')
      });
    }

    return next.handle(request);
  }
}
