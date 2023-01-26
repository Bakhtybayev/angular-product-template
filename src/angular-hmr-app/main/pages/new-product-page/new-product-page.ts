import { Component, EventEmitter, Output } from "@angular/core";
import { FormService } from "../../services/form.service";

@Component({
  selector: 'new-product-page',
  templateUrl: './new-product-page.html',
  styleUrls: ['./new-product-page.scss']
})

export class NewProductPage {

  @Output() isProductCallBack = new EventEmitter();

  public newProductWidth: number = 500;
  public newProductPadding: number = 10;
  public newProductIsCenter: boolean = true;
  // form titles
  public productNameTitle: string = 'Название товара';
  public productCountTitle: string = 'Количество';
  public productPriceTitle: string = 'Цена товара';
  // form titles
  public productNamePlaceholder: string = 'Введите название';
  public productCountPlaceholder: string = 'Введите количество';
  public productPricePlaceholder: string = 'Введите цену';

  constructor(public formService: FormService) { }

  addProductValidation(): void {
    this.formService.handleValidationForms();
    if (!this.formService.nameRequired$.value &&
      !this.formService.priceRequired$.value &&
      !this.formService.countRequired$) {
      this.isProductCallBack.emit(false);
    }
  }

  deleteNewProduct(): void {
    this.formService.handleClearForm();
    this.isProductCallBack.emit(false);
  }

  emitNameProduct(name: string): void {
    this.formService.productName$.next(name);
  }
  emitPriceProduct(price: number): void {
    let priceParse: number = 0;
    if (typeof price === 'string') {
      priceParse = parseInt(price);
    }
    this.formService.productPrice$.next(priceParse);
  }
  emitCountProduct(count: number): void {
    let countParse: number = 0;
    if (typeof count === 'string') {
      countParse = parseInt(count);
    }
    this.formService.productCount$.next(countParse);
  }
  emitPhotoProduct(photo: string): void {
    this.formService.productPhoto$.next(photo);
  }
}
