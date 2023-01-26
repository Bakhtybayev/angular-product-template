import { Action } from "@ngrx/store";
import { Product } from "../module/product-module";
import { InitialState } from "../reducer/addProduct.reducer";

export enum ProductActionType {
  ADD_MANS_JACKET_PAGE_ONE = '[PRODUCT] Add Mens Jacket ONE',
  ADD_MANS_JACKET_PAGE_TWO = '[PRODUCT] Add Mens Jacket TWO',
  ADD_MANS_JACKET_PAGE_THREE = '[PRODUCT] Add Mens Jacket THREE',

  ADD_WOMENS_JACKET_PAGE_ONE = '[PRODUCT] Add Womens Jacket ONE',
  ADD_WOMENS_JACKET_PAGE_TWO = '[PRODUCT] Add Womens Jacket TWO',
  ADD_WOMENS_JACKET_PAGE_THREE = '[PRODUCT] Add Womens Jacket THREE',

  ADD_MENS_SHOES_PAGE_ONE = '[PRODUCT] Add Mens Shoes ONE',
  ADD_MENS_SHOES_PAGE_TWO = '[PRODUCT] Add Mens Shoes TWO',
  ADD_MENS_SHOES_PAGE_THREE = '[PRODUCT] Add Mens Shoes THREE',

  ADD_WOMENS_SHOES_PAGE_ONE = '[PRODUCT] Add Womens Shoes ONE',
  ADD_WOMENS_SHOES_PAGE_TWO = '[PRODUCT] Add Womens Shoes TWO',
  ADD_WOMENS_SHOES_PAGE_THREE = '[PRODUCT] Add Womens Shoes THREE',

  ADD_MENS_OTHER_PAGE_ONE = '[PRODUCT] Add Mens Other ONE',
  ADD_MENS_OTHER_PAGE_TWO = '[PRODUCT] Add Mens Other TWO',
  ADD_MENS_OTHER_PAGE_THREE = '[PRODUCT] Add Mens Other THREE',

  ADD_WOMENS_OTHER_PAGE_ONE = '[PRODUCT] Add Womens Other ONE',
  ADD_WOMENS_OTHER_PAGE_TWO = '[PRODUCT] Add Womens Other TWO',
  ADD_WOMENS_OTHER_PAGE_THREE = '[PRODUCT] Add Womens Other THREE'
}

// actions can push static store
export class addMJacketACPageOne implements Action {
  readonly type = ProductActionType.ADD_MANS_JACKET_PAGE_ONE;
  constructor(public payload: Product) {
    let newProduct: any;
    newProduct = localStorage.getItem('mansJackets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    InitialState.mansJakets.pageOne.push(payload);
    localStorage.setItem('mansJackets', JSON.stringify(newProduct));
  }
}

export class addMJacketACPageTwo implements Action {
  readonly type = ProductActionType.ADD_MANS_JACKET_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.mansJakets.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansJackets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('mansJackets', JSON.stringify(newProduct));
  }
}

export class addMJacketACPageThree implements Action {
  readonly type = ProductActionType.ADD_MANS_JACKET_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.mansJakets.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansJackets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('mansJackets', JSON.stringify(newProduct));
  }
}

export class addWJacketACPageOne implements Action {
  readonly type = ProductActionType.ADD_WOMENS_JACKET_PAGE_ONE;
  constructor(public payload: Product) {
    InitialState.femaleJakets.pageOne.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleJakets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    localStorage.setItem('femaleJakets', JSON.stringify(newProduct));
  }
}

export class addWJacketACPageTwo implements Action {
  readonly type = ProductActionType.ADD_WOMENS_JACKET_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.femaleJakets.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleJakets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('femaleJakets', JSON.stringify(newProduct));
  }
}

export class addWJacketACPageThree implements Action {
  readonly type = ProductActionType.ADD_WOMENS_JACKET_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.femaleJakets.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleJakets');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('femaleJakets', JSON.stringify(newProduct));
  }
}

export class addMShoesACPageOne implements Action {
  readonly type = ProductActionType.ADD_MENS_SHOES_PAGE_ONE;
  constructor(public payload: Product) {
    InitialState.mansShoes.pageOne.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    localStorage.setItem('mansShoes', JSON.stringify(newProduct));
  }
}

export class addMShoesACPageTwo implements Action {
  readonly type = ProductActionType.ADD_MENS_SHOES_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.mansShoes.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('mansShoes', JSON.stringify(newProduct));
  }
}

export class addMShoesACPageThree implements Action {
  readonly type = ProductActionType.ADD_MENS_SHOES_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.mansShoes.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('mansShoes', JSON.stringify(newProduct));
  }
}

export class addWShoesACPageOne implements Action {
  readonly type = ProductActionType.ADD_WOMENS_SHOES_PAGE_ONE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageOne.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    localStorage.setItem('femaleShoes', JSON.stringify(newProduct));
  }
}

export class addWShoesACPageTwo implements Action {
  readonly type = ProductActionType.ADD_WOMENS_SHOES_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('femaleShoes', JSON.stringify(newProduct));
  }
}

export class addWShoesACPageThree implements Action {
  readonly type = ProductActionType.ADD_WOMENS_SHOES_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleShoes');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('femaleShoes', JSON.stringify(newProduct));
  }
}

export class addMOtherACPageOne implements Action {
  readonly type = ProductActionType.ADD_MENS_OTHER_PAGE_ONE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageOne.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    localStorage.setItem('mansOther', JSON.stringify(newProduct));
  }
}

export class addMOtherACPageTwo implements Action {
  readonly type = ProductActionType.ADD_MENS_OTHER_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('mansOther', JSON.stringify(newProduct));
  }
}

export class addMOtherACPageThree implements Action {
  readonly type = ProductActionType.ADD_MENS_OTHER_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('mansOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('mansOther', JSON.stringify(newProduct));
  }
}

export class addWOtherACPageOne implements Action {
  readonly type = ProductActionType.ADD_WOMENS_OTHER_PAGE_ONE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageOne.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageOne.push(payload);
    localStorage.setItem('femaleOther', JSON.stringify(newProduct));
  }
}

export class addWOtherACPageTwo implements Action {
  readonly type = ProductActionType.ADD_WOMENS_OTHER_PAGE_TWO;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageTwo.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageTwo.push(payload);
    localStorage.setItem('femaleOther', JSON.stringify(newProduct));
  }
}

export class addWOtherACPageThree implements Action {
  readonly type = ProductActionType.ADD_WOMENS_OTHER_PAGE_THREE;
  constructor(public payload: Product) {
    InitialState.femaleShoes.pageThree.push(payload);
    let newProduct: any;
    newProduct = localStorage.getItem('femaleOther');
    newProduct = JSON.parse(newProduct);
    newProduct.pageThree.push(payload);
    localStorage.setItem('femaleOther', JSON.stringify(newProduct));
  }
}

export type ProductAction = addMJacketACPageOne |
  addMJacketACPageTwo | addMJacketACPageThree |
  addWJacketACPageOne | addWJacketACPageTwo |
  addWJacketACPageThree | addMShoesACPageOne |
  addMShoesACPageTwo | addMShoesACPageThree |
  addWShoesACPageOne | addWShoesACPageTwo |
  addWShoesACPageThree | addMOtherACPageOne |
  addMOtherACPageTwo | addMOtherACPageThree |
  addWOtherACPageOne | addWOtherACPageTwo |
  addWOtherACPageThree
