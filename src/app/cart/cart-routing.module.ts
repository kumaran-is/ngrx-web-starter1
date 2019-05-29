import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '@app/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    data: { pageTitle: 'My Shopping Cart' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartComponent];
}
