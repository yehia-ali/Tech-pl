import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private searchSubject = new BehaviorSubject<string>('');
  searchTerm = this.searchSubject.asObservable();
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.isLoggedInSubject.asObservable();
  setLoggedIn(status: boolean) {
    this.isLoggedInSubject.next(status);
  }
  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
