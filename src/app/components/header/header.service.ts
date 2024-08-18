import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('accessToken'));
  isLoggedIn = this.isLoggedInSubject.asObservable();
  private searchSubject = new BehaviorSubject<string>('');
  searchTerm = this.searchSubject.asObservable();

  setLoginStatus(isLoggedIn: boolean): void {
    if (!isLoggedIn) {
      localStorage.removeItem('accessToken');
    } 
    this.isLoggedInSubject.next(isLoggedIn);
  }

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
  
}
