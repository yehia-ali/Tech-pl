import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './pages/dashboard-routing.module';
import { AuthRoutingModule } from './core/auth/auth-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    DashboardRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
