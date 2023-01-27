import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable } from "rxjs";
import { addMJacketACPageOne, addMJacketACPageThree, addMJacketACPageTwo, addMOtherACPageOne, addMOtherACPageThree, addMOtherACPageTwo, addMShoesACPageOne, addMShoesACPageThree, addMShoesACPageTwo, addWJacketACPageOne, addWJacketACPageThree, addWJacketACPageTwo, addWOtherACPageOne, addWOtherACPageThree, addWOtherACPageTwo, addWShoesACPageOne, addWShoesACPageThree, addWShoesACPageTwo } from "src/angular-hmr-app/store/action/addProduct.action";
import { Product } from "src/angular-hmr-app/store/module/product-module";
import { ProductsService } from "./products.service";

@Injectable({
  providedIn: 'root'
})

export class FormService {

  public nameRequired$ = new BehaviorSubject<boolean>(false);
  public priceRequired$ = new BehaviorSubject<boolean>(false);
  public countRequired$ = new BehaviorSubject<boolean>(false);
  public productName$ = new BehaviorSubject<string>('');
  public productPrice$ = new BehaviorSubject<number>(0);
  public productCount$ = new BehaviorSubject<number>(0);
  public productPhoto$ = new BehaviorSubject<string>('');
  public nameRequiredText$ = new BehaviorSubject<string>('');
  public priceRequiredText$ = new BehaviorSubject<string>('');
  public countRequiredText$ = new BehaviorSubject<string>('');

  public pushDataCondition: string = '';

  public productForm: Product = {
    id: 0,
    title: '',
    price: 0,
    count: 0,
    image: ''
  };

  // public products$: Observable<Object>;

  constructor(private store$: Store<Product>, public productService: ProductsService) {
    // this.products$ = store$.select('product');
  }

  handleValidationForms(): void {
    if (this.productName$.value.length < 2) {
      this.nameRequired$.next(true);
      this.nameRequiredText$.next('Поля не должен быть пустым')
    } else if (
      this.productName$.value.includes('1') ||
      this.productName$.value.includes('2') ||
      this.productName$.value.includes('3') ||
      this.productName$.value.includes('4') ||
      this.productName$.value.includes('5') ||
      this.productName$.value.includes('6') ||
      this.productName$.value.includes('7') ||
      this.productName$.value.includes('8') ||
      this.productName$.value.includes('9') ||
      this.productName$.value.includes('0')
    ) {
      this.nameRequired$.next(true);
      this.nameRequiredText$.next('Название должен быть строкой')
    } else if (this.productName$.value.length > 2 && typeof this.productName$.value === 'string') {
      this.nameRequired$.next(false);
      this.nameRequiredText$.next('')
      this.pushDataCondition += 'do';
    }

    if (this.productPrice$.value <= 0) {
      this.priceRequired$.next(true);
      this.priceRequiredText$.next('Введите корректную цену')
    } else if (typeof this.productPrice$.value !== 'number') {
      this.priceRequired$.next(true);
      this.priceRequiredText$.next('Цена должен быть цифры')
    } else if (this.productPrice$.value >= 1 && typeof this.productPrice$.value === 'number') {
      this.priceRequired$.next(false);
      this.priceRequiredText$.next('')
      this.pushDataCondition += 'n';
    }

    if (this.productCount$.value <= 0) {
      this.countRequired$.next(true);
      this.countRequiredText$.next('Введите корректную цену')
    } else if (typeof this.productCount$.value !== 'number') {
      this.countRequired$.next(true);
      this.countRequiredText$.next('Цена должен быть цифры')
    } else if (this.productCount$.value >= 1 && typeof this.productCount$.value === 'number') {
      this.countRequired$.next(false);
      this.countRequiredText$.next('')
      this.pushDataCondition += 'e';
    }

    if (this.pushDataCondition === 'done') {
      this.productForm.id = Math.floor((Math.random() * 700) + 1);
      this.productForm.title = this.productName$.value;
      this.productForm.price = this.productPrice$.value;
      this.productForm.count = this.productCount$.value;
      this.productForm.image = 'http:' + this.productPhoto$.value;
      // push to ngrx
      if (this.productService.isProductType$.value === 'MJackets' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addMJacketACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'MJackets');
      } else if (this.productService.isProductType$.value === 'MJackets' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addMJacketACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'MJackets');
      } else if (this.productService.isProductType$.value === 'MJackets' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addMJacketACPageThree(this.productForm));
        this.productService.initializationAllProductsData(3, 'MJackets');
      }
      if (this.productService.isProductType$.value === 'WJackets' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addWJacketACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'WJackets');
      } else if (this.productService.isProductType$.value === 'WJackets' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addWJacketACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'WJackets');
      } else if (this.productService.isProductType$.value === 'WJackets' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addWJacketACPageThree(this.productForm))
        this.productService.initializationAllProductsData(3, 'WJackets');
      }
      if (this.productService.isProductType$.value === 'MShoes' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addMShoesACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'MShoes');
      } else if (this.productService.isProductType$.value === 'MShoes' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addMShoesACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'MShoes');
      } else if (this.productService.isProductType$.value === 'MShoes' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addMShoesACPageThree(this.productForm))
        this.productService.initializationAllProductsData(3, 'MShoes');
      }
      if (this.productService.isProductType$.value === 'WShoes' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addWShoesACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'WShoes');
      } else if (this.productService.isProductType$.value === 'WShoes' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addWShoesACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'WShoes');
      } else if (this.productService.isProductType$.value === 'WShoes' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addWShoesACPageThree(this.productForm))
        this.productService.initializationAllProductsData(3, 'WShoes');
      }
      if (this.productService.isProductType$.value === 'MOthers' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addMOtherACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'MOthers');
      } else if (this.productService.isProductType$.value === 'MOthers' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addMOtherACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'MOthers');
      } else if (this.productService.isProductType$.value === 'MOthers' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addMOtherACPageThree(this.productForm))
        this.productService.initializationAllProductsData(3, 'MOthers');
      }
      if (this.productService.isProductType$.value === 'WOthers' &&
        this.productService.filterCategoryPage$.value === 1) {
        this.store$.dispatch(new addWOtherACPageOne(this.productForm))
        this.productService.initializationAllProductsData(1, 'WOthers');
      } else if (this.productService.isProductType$.value === 'WOthers' &&
        this.productService.filterCategoryPage$.value === 2) {
        this.store$.dispatch(new addWOtherACPageTwo(this.productForm))
        this.productService.initializationAllProductsData(2, 'WOthers');
      } else if (this.productService.isProductType$.value === 'WOthers' &&
        this.productService.filterCategoryPage$.value === 3) {
        this.store$.dispatch(new addWOtherACPageThree(this.productForm))
        this.productService.initializationAllProductsData(3, 'WOthers');
      }
      this.productService.isProduct$.next(false);
      this.pushDataCondition = '';
    }
  }

  handleClearForm(): void {
    this.productName$.next('');
    this.productPrice$.next(0);
    this.productCount$.next(0);
    this.productPhoto$.next('');
    this.nameRequired$.next(false);
    this.priceRequired$.next(false);
    this.countRequired$.next(false);
    this.nameRequiredText$.next('');
    this.priceRequiredText$.next('');
    this.countRequiredText$.next('');
  }
}
