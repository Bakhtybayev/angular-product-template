import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ProductsData } from 'src/@fake-db/products-widget-db'; //Fake data

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagination } from './common/Pagination/pagination.common';
import { Preloader } from './common/Preloader/preloader.commpon';
import { ButtonComponent } from './main/components/button/button.component';
import { ContainerComponent } from './main/components/container/container.component';
import { FileComponent } from './main/components/form/file/file.component';
import { FormComponent } from './main/components/form/form.component';
import { HeaderComponent } from './main/components/header/header.component';
import { SidebarComponent } from './main/components/sidebar/sidebar.component';
import { NewProductPage } from './main/pages/new-product-page/new-product-page';
import { ProductPage } from './main/pages/product-page/product.page';
import { ProductsPage } from './main/pages/products-page/products.page';
import { addProductReducer } from './store/reducer/addProduct.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    HeaderComponent,
    ProductsPage,
    ButtonComponent,
    ProductPage,
    NewProductPage,
    FormComponent,
    FileComponent,
    Pagination,
    Preloader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(addProductReducer)
  ],
  providers: [
    ProductsData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
