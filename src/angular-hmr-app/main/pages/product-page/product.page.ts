import { Component, Input } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: 'product-page',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss']
})

export class ProductPage {

  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  @Input() count: number = 0;

  constructor(
    public productService: ProductsService,
    private sidebarService: SidebarService) { }

  handleFilterProducts(id: number): void {
    this.productService.handleFillProductsId(id);
  }

  handleFilterAProduct(id: number): void {
    if (this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      !this.sidebarService.isOtherOpen &&
      this.sidebarService.isCloseInnerMale) {
      this.productService.handleFilterProduct(id, 'mansJackets');
    }
    if (this.sidebarService.isCloseOpen &&
      this.sidebarService.isCloseInnerFemale) {
      this.productService.handleFilterProduct(id, 'femaleJackets');
    }
    if (this.sidebarService.isShoesOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isOtherOpen &&
      !this.sidebarService.isShoesOpenFemale) {
      this.productService.handleFilterProduct(id, 'mansShoes');
    }
    if (this.sidebarService.isShoesOpen &&
      this.sidebarService.isShoesOpenFemale &&
      this.sidebarService.isShoesOpenFemale) {
      this.productService.handleFilterProduct(id, 'femaleShoes');
    }
    if (this.sidebarService.isOtherOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      this.sidebarService.isOtherOpenMale) {
      this.productService.handleFilterProduct(id, 'mansOther');
    }
    if (this.sidebarService.isOtherOpen &&
      !this.sidebarService.isCloseOpen &&
      !this.sidebarService.isShoesOpen &&
      this.sidebarService.isOtherOpenFemale) {
      this.productService.handleFilterProduct(id, 'femaleOther');
    }
  }
}
