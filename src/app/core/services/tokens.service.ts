import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  tokens = new BehaviorSubject<object | string>(
    localStorage.getItem('accessToken') || ''
  );

  userData = new BehaviorSubject<object | string>(
    localStorage.getItem('userData') || {}
  );
  constructor() {
    this.tokens.subscribe((token: any) => {
      if ( token)
        localStorage.setItem('accessToken', token);
    });
  }
}
