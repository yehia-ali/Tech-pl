import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/components/toastr/toastr.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse | any) => {
        if (error instanceof HttpErrorResponse) {
          this.toastrService.toastrData.next({
            title: error?.error?.error,
            message: error?.error?.message,
            type: 'error',
          });

          if (error?.status === 409) {
            // To convert the error arrayBuffer to a JSON
            const enc = new TextDecoder('utf-8');
            let data: any = new Uint8Array(error?.error);
            data = JSON.parse(enc.decode(data));

            if (data?.errors?.length) {
              this.toastrService.toastrData.next({
                message: data?.message,
                type: 'error',
              });

              const errors = data?.errors.reduce((obj: any, item: any) => {
                const key = Object.keys(item)[0];
                const value = item[key] || '';
                obj[key] = value;
                return obj;
              }, {});

              const result: any = {
                errors,
              };

              setTimeout(() => {
                this.toastrService.alertImportErrors.next(result);
              });
            }
          }

          if (error?.status === 401) this.router.navigate(['login']);

          return throwError(() => new Error(error?.error?.message));
        } else {
          return throwError(() => new Error(error?.error?.message));
        }
      })
    );
  }
}
