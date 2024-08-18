import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  private productsService = inject(ProductsService);
  categories: any;
  @Output() categoryChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.categoryList();
  }
  categoryList() {
    this.productsService
      .getCategoryList()
      .subscribe((res: any) => {
        this.categories = res;
      });
  }
  onCategoryChange(selectedCategory: string) {
    this.categoryChanged.emit(selectedCategory);
  }

}
