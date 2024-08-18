import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header.service';
import { Product } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CartState } from 'src/app/core/store/reducer/cart.reducer';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class HeaderComponent {
  private headerService = inject(HeaderService);
  private store = inject(Store<{ cart: CartState }>);
  logoUrl = '../../../assets/img/Logomark.svg';
  searchControl = new FormControl('');
  isLoggedIn = this.headerService.isLoggedIn; // Subscribe to the login state

  cartItems?: Observable<Product[]>;
  constructor() {
    this.cartItems = this.store.pipe(select(state => state.cart.items));
  }

  onSearch() {
    this.headerService.setSearchTerm(this.searchControl.value || '');
  }


}
