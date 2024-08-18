import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { ProductComponent } from './products/components/product/product.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ProductComponent,
    title: 'Pleny | Dashboard',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('./products/product.module').then(
            m => m.ProductModule         ),
          title: 'Pleny | Dashboard',
          canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
