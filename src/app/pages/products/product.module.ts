import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BreadCrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { ProductComponent } from './components/product/product.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductComponent,
    FilterComponent,
    ProductCardComponent,
    TruncatePipe
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ProductRoutingModule,
    BreadCrumbModule
  ],
})
export class ProductModule {}
