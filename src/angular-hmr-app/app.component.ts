import { Component, OnInit } from '@angular/core';
import { ProductsService } from './main/services/products.service';
import { InitialState } from './store/reducer/addProduct.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products_project';

  constructor(public productService: ProductsService) { }

  handleOpenModal(event: boolean): void {
    this.productService.handleIsProduct(event);
  }

  ngOnInit(): void {
    localStorage.setItem('mansJackets', JSON.stringify(InitialState.mansJakets));
    localStorage.setItem('femaleJakets', JSON.stringify(InitialState.femaleJakets));
    localStorage.setItem('mansShoes', JSON.stringify(InitialState.mansShoes));
    localStorage.setItem('femaleShoes', JSON.stringify(InitialState.femaleShoes));
    localStorage.setItem('mansOther', JSON.stringify(InitialState.mansOther));
    localStorage.setItem('femaleOther', JSON.stringify(InitialState.femaleOther));
  }
}
