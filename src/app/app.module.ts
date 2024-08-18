import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from './components/toastr/toastr.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthInterceptorService } from './core/interceptors/auth.interceptor';
import { HttpErrorInterceptor } from './core/interceptors/errorHandling.interceptor';
import { TokensService } from './core/services/tokens.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './core/store/reducer/cart.reducer';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule,
    FooterComponent,
    HeaderComponent,
    NgxPaginationModule,
    StoreModule.forRoot({ cart: cartReducer }), 
    EffectsModule.forRoot([]) 
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    TokensService,
    {
      provide: APP_ID,
      useValue: 'serverApp',
    },
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
