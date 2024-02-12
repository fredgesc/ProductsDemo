import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Product/products-list/products-list.component';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsListComponent,
  },
  {
    path: "products/:id",
    component: ProductAddComponent,
  },
  {
    path: "addProduct",
    component: ProductAddComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
