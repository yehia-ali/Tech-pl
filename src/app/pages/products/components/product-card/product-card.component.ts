import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/core/store/actions/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  private store = inject(Store);
  @Input({ required: true }) cardInfo:any;
  ngOnInit(): void {
  }
  addToCart() {
    this.store.dispatch(addToCart({ product: this.cardInfo }));
  }
}
