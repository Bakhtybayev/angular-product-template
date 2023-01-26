import { Component, OnInit } from "@angular/core";
import { InitialState } from "src/angular-hmr-app/store/reducer/addProduct.reducer";
import { ProductsService } from "../../services/products.service";
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: 'products-page',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})

export class ProductsPage implements OnInit {

  public productsWidth: number = 800;
  public productsPadding: number = 5;
  public productsData: any = {};

  constructor(
    public productService: ProductsService,
    public sidebarService: SidebarService) {
  }

  handleOpenModal(event: boolean): void {
    this.productService.handleIsProduct(event);
  }

  ngOnInit(): void {
    this.productsData = InitialState;
  }

  // for filter many products
  handleFilterTheProducts(): void {
    if (this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      !this.sidebarService.isOtherOpen &&
      this.sidebarService.isCloseInnerMale) {
      this.productService.handleFilterProducts('mansJackets');
    }
    if (this.sidebarService.isCloseOpen &&
      this.sidebarService.isCloseInnerFemale) {
      this.productService.handleFilterProducts('femaleJackets');
    }
    if (this.sidebarService.isShoesOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isOtherOpen &&
      !this.sidebarService.isShoesOpenFemale) {
      this.productService.handleFilterProducts('mansShoes');
    }
    if (this.sidebarService.isShoesOpen &&
      this.sidebarService.isShoesOpenFemale &&
      this.sidebarService.isShoesOpenFemale) {
      this.productService.handleFilterProducts('femaleShoes');
    }
    if (this.sidebarService.isOtherOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      this.sidebarService.isOtherOpenMale) {
      this.productService.handleFilterProducts('mansOther');
    }
    if (this.sidebarService.isOtherOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      this.sidebarService.isOtherOpenFemale) {
      this.productService.handleFilterProducts('femaleOther');
    }
  }

  handleChangePage(page: number): void {
    this.productService.handleChangeProductPage(page);
  }

}
