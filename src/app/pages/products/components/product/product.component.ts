import { Component, inject, OnInit } from '@angular/core';
import { IBreadCrumb } from 'src/app/components/breadcrumb/breadcrumb.interface';
import { ProductsService } from '../../services/products.service';
import { HeaderService } from 'src/app/components/header/header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  breadCrumbData: IBreadCrumb[] = [];
  private headerService = inject(HeaderService);
  private productsService = inject(ProductsService);
  dataResponse: any = { products: [] };
  filteredProducts: any = [];
  searchSubscription?: Subscription;
  currentPage: number = 1;
  searchMode: boolean = false;
  constructor(

  ) {
    this.breadCrumbData = [
      {
        value: 'Home',
        url: `/dashboard`,
      },
      {
        value: 'Products',
        url: `/dashboard/product`,
      },
      {
        value: 'Smart Phones',
        url: ``,
      },
      {
        value: 'iPhone',
        url: ``,
      },
    ];
  }
  ngOnInit(): void {
    this.productList();
    this.searchSubscription = this.headerService.searchTerm.subscribe(query => {
      this.onSearch(query);
    });

  }
  productList() {
    this.productsService
      .getProductsList()
      .subscribe((res: any) => {
        this.dataResponse = res;
        this.filteredProducts = res.products;

      });
  }
  onPageChange(page: number) {
    debugger
    this.currentPage = page;
  }
  onCategoryChange(selectedCategory: string) {
    if (selectedCategory === 'all') {
      this.filteredProducts = this.dataResponse.products;
    } else {
      this.productsService
        .getProductsByCategory(selectedCategory)
        .subscribe((res: any) => {
          this.filteredProducts = res.products;
        });
    }
  }
  onSearch(query: string) {
    debugger
    if (query) {
      this.productsService.searchProducts(query).subscribe((res: any) => {
        this.filteredProducts = res.products;
        this.searchMode = true;
      });
    } else {
      this.filteredProducts = this.dataResponse.products;
      this.searchMode = false;
    }
  }

}
