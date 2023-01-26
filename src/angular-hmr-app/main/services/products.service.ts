import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  public filterCategoryPage$ = new BehaviorSubject<number>(1);
  public title$ = new BehaviorSubject<string>('Выберите тип продукта');
  public isProductType$ = new BehaviorSubject<string>('');
  public isProduct$ = new BehaviorSubject<boolean>(false);
  public filteredProducts$ = new BehaviorSubject<number[]>([]);
  public mansJackets: any;
  public femaleJackets: any;
  public mansShoes: any;
  public femaleShoes: any;
  public mansOther: any;
  public femaleOther: any;

  // for Pagination
  // MensJackets
  public pagesCount: number = 0;
  public currentPage: number = 1;
  public totalProductsCount: number = 0;
  public pageProductsCount: number = 1;
  public mJackets: any;

  // Womens Jackets
  public wPagesCount: number = 0;
  public wCurrentPage: number = 1;
  public wTotalProductsCount: number = 0;
  public wPageProductsCount: number = 1;
  public wJackets: any;

  // Mens Shoes
  public mSPagesCount: number = 0;
  public mSCurrentPage: number = 1;
  public mSTotalProductsCount: number = 0;
  public mSPageProductsCount: number = 1;
  public mSShoes: any;

  // Womens Shoes
  public wSPagesCount: number = 0;
  public wSCurrentPage: number = 1;
  public wSTotalProductsCount: number = 0;
  public wSPageProductsCount: number = 1;
  public wSShoes: any;

  // Mens Others
  public mOPagesCount: number = 0;
  public mOCurrentPage: number = 1;
  public mOTotalProductsCount: number = 0;
  public mOPageProductsCount: number = 1;
  public mOOthers: any;

  // Womens Others
  public wOPagesCount: number = 0;
  public wOCurrentPage: number = 1;
  public wOTotalProductsCount: number = 0;
  public wOPageProductsCount: number = 1;
  public wOOthers: any;


  constructor() {
    this.mansJackets = localStorage.getItem('mansJackets');
    this.mansJackets = JSON.parse(this.mansJackets);
    this.mJackets = this.mansJackets.pageOne;
    this.totalProductsCount = this.mansJackets.pageOne.length;
    this.pagesCount = Math.ceil(this.totalProductsCount / this.pageProductsCount);
    localStorage.setItem('currentPage', JSON.stringify(this.currentPage));
    localStorage.setItem('totalProductsCount', JSON.stringify(this.totalProductsCount));
    localStorage.setItem('pagesCount', JSON.stringify(this.pagesCount));
    localStorage.setItem('pageProductsCount', JSON.stringify(this.pageProductsCount));

    this.femaleJackets = localStorage.getItem('femaleJakets');
    this.femaleJackets = JSON.parse(this.femaleJackets);
    this.wJackets = this.femaleJackets.pageOne;
    this.wTotalProductsCount = this.femaleJackets.pageOne.length;
    this.wPagesCount = Math.ceil(this.wTotalProductsCount / this.wPageProductsCount);
    localStorage.setItem('wCurrentPage', JSON.stringify(this.wCurrentPage));
    localStorage.setItem('wTotalProductsCount', JSON.stringify(this.wTotalProductsCount));
    localStorage.setItem('wPagesCount', JSON.stringify(this.wPagesCount));
    localStorage.setItem('wPageProductsCount', JSON.stringify(this.wPageProductsCount));

    this.mansShoes = localStorage.getItem('mansShoes');
    this.mansShoes = JSON.parse(this.mansShoes);
    this.mSShoes = this.mansShoes.pageOne;
    this.mSTotalProductsCount = this.mansShoes.pageOne.length;
    this.mSPagesCount = Math.ceil(this.mSTotalProductsCount / this.mSPageProductsCount);
    localStorage.setItem('mSCurrentPage', JSON.stringify(this.mSCurrentPage));
    localStorage.setItem('mSTotalProductsCount', JSON.stringify(this.mSTotalProductsCount));
    localStorage.setItem('mSPagesCount', JSON.stringify(this.mSPagesCount));
    localStorage.setItem('mSPageProductsCount', JSON.stringify(this.mSPageProductsCount));

    this.femaleShoes = localStorage.getItem('femaleShoes');
    this.femaleShoes = JSON.parse(this.femaleShoes);
    this.wSShoes = this.femaleShoes.pageOne;
    this.wSTotalProductsCount = this.femaleShoes.pageOne.length;
    this.wSPagesCount = Math.ceil(this.wSTotalProductsCount / this.wSPageProductsCount);
    localStorage.setItem('wSCurrentPage', JSON.stringify(this.wSCurrentPage));
    localStorage.setItem('wSTotalProductsCount', JSON.stringify(this.wSTotalProductsCount));
    localStorage.setItem('wSPagesCount', JSON.stringify(this.wSPagesCount));
    localStorage.setItem('wSPageProductsCount', JSON.stringify(this.wSPageProductsCount));

    this.mansOther = localStorage.getItem('mansOther');
    this.mansOther = JSON.parse(this.mansOther);
    this.mOOthers = this.mansOther.pageOne;
    this.mOTotalProductsCount = this.mansOther.pageOne.length;
    this.mOPagesCount = Math.ceil(this.mOTotalProductsCount / this.mOPageProductsCount);
    localStorage.setItem('mOCurrentPage', JSON.stringify(this.mOCurrentPage));
    localStorage.setItem('mOTotalProductsCount', JSON.stringify(this.mOTotalProductsCount));
    localStorage.setItem('mOPagesCount', JSON.stringify(this.mOPagesCount));
    localStorage.setItem('mOPageProductsCount', JSON.stringify(this.mOPageProductsCount));

    this.femaleOther = localStorage.getItem('femaleOther');
    this.femaleOther = JSON.parse(this.femaleOther);
    this.wOOthers = this.femaleOther.pageOne;
    this.wOTotalProductsCount = this.femaleOther.pageOne.length;
    this.wOPagesCount = Math.ceil(this.wOTotalProductsCount / this.wOPageProductsCount);
    localStorage.setItem('wOCurrentPage', JSON.stringify(this.wOCurrentPage));
    localStorage.setItem('wOTotalProductsCount', JSON.stringify(this.wOTotalProductsCount));
    localStorage.setItem('woPagesCount', JSON.stringify(this.wOPagesCount));
    localStorage.setItem('wOPageProductsCount', JSON.stringify(this.wOPageProductsCount));
  }

  initializationAllProductsData(page: number, type: string): void {
    if (type === 'MJackets' && page === 1) {
      this.mansJackets = localStorage.getItem('mansJackets');
      this.mansJackets = JSON.parse(this.mansJackets);
      this.mJackets = this.mansJackets.pageOne;
    } else if (type === 'MJackets' && page === 2) {
      this.mansJackets = localStorage.getItem('mansJackets');
      this.mansJackets = JSON.parse(this.mansJackets);
      this.mJackets = this.mansJackets.pageTwo;
    } else if (type === 'MJackets' && page === 3) {
      this.mansJackets = localStorage.getItem('mansJackets');
      this.mansJackets = JSON.parse(this.mansJackets);
      this.mJackets = this.mansJackets.pageThree;
    }
    if (type === 'WJackets' && page === 1) {
      this.femaleJackets = localStorage.getItem('femaleJakets');
      this.femaleJackets = JSON.parse(this.femaleJackets);
      this.wJackets = this.femaleJackets.pageOne;
    } else if (type === 'WJackets' && page === 2) {
      this.femaleJackets = localStorage.getItem('femaleJakets');
      this.femaleJackets = JSON.parse(this.femaleJackets);
      this.wJackets = this.femaleJackets.pageTwo;
    } else if (type === 'WJackets' && page === 3) {
      this.femaleJackets = localStorage.getItem('femaleJakets');
      this.femaleJackets = JSON.parse(this.femaleJackets);
      this.wJackets = this.femaleJackets.pageThree;
    }
    if (type === 'MShoes' && page === 1) {
      this.mansShoes = localStorage.getItem('mansShoes');
      this.mansShoes = JSON.parse(this.mansShoes);
      this.mSShoes = this.mansShoes.pageOne;
    } else if (type === 'MShoes' && page === 2) {
      this.mansShoes = localStorage.getItem('mansShoes');
      this.mansShoes = JSON.parse(this.mansShoes);
      this.mSShoes = this.mansShoes.pageTwo;
    } else if (type === 'MShoes' && page === 3) {
      this.mansShoes = localStorage.getItem('mansShoes');
      this.mansShoes = JSON.parse(this.mansShoes);
      this.mSShoes = this.mansShoes.pageThree;
    }
    if (type === 'WShoes' && page === 1) {
      this.femaleShoes = localStorage.getItem('femaleShoes');
      this.femaleShoes = JSON.parse(this.femaleShoes);
      this.wSShoes = this.femaleShoes.pageOne;
    } else if (type === 'WShoes' && page === 2) {
      this.femaleShoes = localStorage.getItem('femaleShoes');
      this.femaleShoes = JSON.parse(this.femaleShoes);
      this.wSShoes = this.femaleShoes.pageTwo;
    } else if (type === 'WShoes' && page === 3) {
      this.femaleShoes = localStorage.getItem('femaleShoes');
      this.femaleShoes = JSON.parse(this.femaleShoes);
      this.wSShoes = this.femaleShoes.pageThree;
    }
    if (type === 'MOthers' && page === 1) {
      this.mansOther = localStorage.getItem('mansOther');
      this.mansOther = JSON.parse(this.mansOther);
      this.mOOthers = this.mansOther.pageOne;
    } else if (type === 'MOthers' && page === 2) {
      this.mansOther = localStorage.getItem('mansOther');
      this.mansOther = JSON.parse(this.mansOther);
      this.mOOthers = this.mansOther.pageTwo;
    } else if (type === 'MOthers' && page === 3) {
      this.mansOther = localStorage.getItem('mansOther');
      this.mansOther = JSON.parse(this.mansOther);
      this.mOOthers = this.mansOther.pageThree;
    }
    if (type === 'WOthers' && page === 1) {
      this.femaleOther = localStorage.getItem('femaleOther');
      this.femaleOther = JSON.parse(this.femaleOther);
      this.wOOthers = this.femaleOther.pageOne;
    } else if (type === 'WOthers' && page === 2) {
      this.femaleOther = localStorage.getItem('femaleOther');
      this.femaleOther = JSON.parse(this.femaleOther);
      this.wOOthers = this.femaleOther.pageTwo;
    } else if (type === 'WOthers' && page === 3) {
      this.femaleOther = localStorage.getItem('femaleOther');
      this.femaleOther = JSON.parse(this.femaleOther);
      this.wOOthers = this.femaleOther.pageThree;
    }
  }

  handleIsProduct(isNewProduct: boolean): void {
    this.isProduct$.next(isNewProduct);
  }

  handleFillProductsId(id: number): void {
    this.filteredProducts$.value.push(id);
  }
  // delete MANY
  handleFilterProducts(type: string): void {
    if (type === 'mansJackets') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('mansJackets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansJackets.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansJackets.pageOne = this.mansJackets.pageOne.filter(item => item.id !== null);
        this.mJackets = this.mansJackets.pageOne;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('mansJackets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansJackets.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansJackets.pageTwo = this.mansJackets.pageTwo.filter(item => item.id !== null);
        this.mJackets = this.mansJackets.pageTwo;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('mansJackets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansJackets.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansJackets.pageThree = this.mansJackets.pageThree.filter(item => item.id !== null);
        this.mJackets = this.mansJackets.pageThree;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
        this.filteredProducts$.next([]);
      }
    }

    if (type === 'femaleJackets') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('femaleJakets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleJackets.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleJackets.pageOne = this.femaleJackets.pageOne.filter(item => item.id !== null);
        this.wJackets = this.femaleJackets.pageOne;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('femaleJakets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleJackets.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleJackets.pageTwo = this.femaleJackets.pageTwo.filter(item => item.id !== null);
        this.wJackets = this.femaleJackets.pageTwo;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('femaleJakets')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleJackets.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleJackets.pageThree = this.femaleJackets.pageThree.filter(item => item.id !== null);
        this.wJackets = this.femaleJackets.pageThree;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
        this.filteredProducts$.next([]);
      }
    }

    if (type === 'mansShoes') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('mansShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansShoes.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansShoes.pageOne = this.mansShoes.pageOne.filter(item => item.id !== null);
        this.mSShoes = this.mansShoes.pageOne;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('mansShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansShoes.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansShoes.pageTwo = this.mansShoes.pageTwo.filter(item => item.id !== null);
        this.mSShoes = this.mansShoes.pageTwo;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('mansShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansShoes.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansShoes.pageThree = this.mansShoes.pageThree.filter(item => item.id !== null);
        this.mSShoes = this.mansShoes.pageThree;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
        this.filteredProducts$.next([]);
      }
    }

    if (type === 'femaleShoes') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('femaleShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleShoes.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleShoes.pageOne = this.femaleShoes.pageOne.filter(item => item.id !== null);
        this.wSShoes = this.femaleShoes.pageOne;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('femaleShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleShoes.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleShoes.pageTwo = this.femaleShoes.pageTwo.filter(item => item.id !== null);
        this.wSShoes = this.femaleShoes.pageTwo;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('femaleShoes')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleShoes.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleShoes.pageThree = this.femaleShoes.pageThree.filter(item => item.id !== null);
        this.wSShoes = this.femaleShoes.pageThree;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
        this.filteredProducts$.next([]);
      }
    }

    if (type === 'mansOther') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('mansOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansOther.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansOther.pageOne = this.mansOther.pageOne.filter(item => item.id !== null);
        this.mOOthers = this.mansOther.pageOne;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('mansOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansOther.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansOther.pageTwo = this.mansOther.pageTwo.filter(item => item.id !== null);
        this.mOOthers = this.mansOther.pageTwo;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('mansOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.mansOther.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.mansOther.pageThree = this.mansOther.pageThree.filter(item => item.id !== null);
        this.mOOthers = this.mansOther.pageThree;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
        this.filteredProducts$.next([]);
      }
    }

    if (type === 'femaleOther') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('femaleOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleOther.pageOne.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleOther.pageOne = this.femaleOther.pageOne.filter(item => item.id !== null);
        this.wOOthers = this.femaleOther.pageOne;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('femaleOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleOther.pageTwo.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleOther.pageTwo = this.femaleOther.pageTwo.filter(item => item.id !== null);
        this.wOOthers = this.femaleOther.pageTwo;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
        this.filteredProducts$.next([]);
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('femaleOther')
        if (this.filteredProducts$.value.length > 0) {
          this.filteredProducts$.value.forEach(newProduct => {
            this.femaleOther.pageThree.forEach(product => {
              if (product.id === newProduct) {
                product.id = null;
              }
            })
          })
        }
        this.femaleOther.pageThree = this.femaleOther.pageThree.filter(item => item.id !== null);
        this.wOOthers = this.femaleOther.pageThree;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
        this.filteredProducts$.next([]);
      }
    }
  }
  // delete ONE
  handleFilterProduct(id: number, type: string): void {
    if (type === 'mansJackets') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('mansJackets');
        this.mansJackets.pageOne = this.mansJackets.pageOne.filter(item => item.id !== id);
        this.mJackets = this.mansJackets.pageOne;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('mansJackets');
        this.mansJackets.pageTwo = this.mansJackets.pageTwo.filter(item => item.id !== id);
        this.mJackets = this.mansJackets.pageTwo;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('mansJackets');
        this.mansJackets.pageThree = this.mansJackets.pageThree.filter(item => item.id !== id);
        this.mJackets = this.mansJackets.pageThree;
        localStorage.setItem('mansJackets', JSON.stringify(this.mansJackets));
      }
    }
    if (type === 'femaleJackets') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('femaleJakets');
        this.femaleJackets.pageOne = this.femaleJackets.pageOne.filter(item => item.id !== id);
        this.wJackets = this.femaleJackets.pageOne;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('femaleJakets');
        this.femaleJackets.pageTwo = this.femaleJackets.pageTwo.filter(item => item.id !== id);
        this.wJackets = this.femaleJackets.pageTwo;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('femaleJakets');
        this.femaleJackets.pageThree = this.femaleJackets.pageThree.filter(item => item.id !== id);
        this.wJackets = this.femaleJackets.pageThree;
        localStorage.setItem('femaleJakets', JSON.stringify(this.femaleJackets));
      }
    }
    if (type === 'mansShoes') {
      if (this.filterCategoryPage$.value === 1) {
        // localStorage.removeItem('mansShoes');
        this.mansShoes.pageOne = this.mansShoes.pageOne.filter(item => item.id !== id);
        this.mSShoes = this.mansShoes.pageOne;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
      } else if (this.filterCategoryPage$.value === 2) {
        // localStorage.removeItem('mansShoes');
        this.mansShoes.pageTwo = this.mansShoes.pageTwo.filter(item => item.id !== id);
        this.mSShoes = this.mansShoes.pageTwo;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
      } else if (this.filterCategoryPage$.value === 3) {
        // localStorage.removeItem('mansShoes');
        this.mansShoes.pageThree = this.mansShoes.pageThree.filter(item => item.id !== id);
        this.mSShoes = this.mansShoes.pageThree;
        localStorage.setItem('mansShoes', JSON.stringify(this.mansShoes));
      }
    }
    if (type === 'femaleShoes') {
      if (this.filterCategoryPage$.value === 1) {
        localStorage.removeItem('femaleShoes');
        this.femaleShoes.pageOne = this.femaleShoes.pageOne.filter(item => item.id !== id);
        this.wSShoes = this.femaleShoes.pageOne;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
      } else if (this.filterCategoryPage$.value === 2) {
        localStorage.removeItem('femaleShoes');
        this.femaleShoes.pageTwo = this.femaleShoes.pageTwo.filter(item => item.id !== id);
        this.wSShoes = this.femaleShoes.pageTwo;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
      } else if (this.filterCategoryPage$.value === 3) {
        localStorage.removeItem('femaleShoes');
        this.femaleShoes.pageThree = this.femaleShoes.pageThree.filter(item => item.id !== id);
        this.wSShoes = this.femaleShoes.pageThree;
        localStorage.setItem('femaleShoes', JSON.stringify(this.femaleShoes));
      }
    }
    if (type === 'mansOther') {
      if (this.filterCategoryPage$.value === 1) {
        localStorage.removeItem('mansOther');
        this.mansOther.pageOne = this.mansOther.pageOne.filter(item => item.id !== id);
        this.mOOthers = this.mansOther.pageOne;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
      } else if (this.filterCategoryPage$.value === 2) {
        localStorage.removeItem('mansOther');
        this.mansOther.pageTwo = this.mansOther.pageTwo.filter(item => item.id !== id);
        this.mOOthers = this.mansOther.pageTwo;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
      } else if (this.filterCategoryPage$.value === 3) {
        localStorage.removeItem('mansOther');
        this.mansOther.pageThree = this.mansOther.pageThree.filter(item => item.id !== id);
        this.mOOthers = this.mansOther.pageThree;
        localStorage.setItem('mansOther', JSON.stringify(this.mansOther));
      }
    }
    if (type === 'femaleOther') {
      if (this.filterCategoryPage$.value === 1) {
        localStorage.removeItem('femaleOther');
        this.femaleOther.pageOne = this.femaleOther.pageOne.filter(item => item.id !== id);
        this.wOOthers = this.femaleOther.pageOne;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
      } else if (this.filterCategoryPage$.value === 2) {
        localStorage.removeItem('femaleOther');
        this.femaleOther.pageTwo = this.femaleOther.pageTwo.filter(item => item.id !== id);
        this.wOOthers = this.femaleOther.pageTwo;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
      } else if (this.filterCategoryPage$.value === 3) {
        localStorage.removeItem('femaleOther');
        this.femaleOther.pageThree = this.femaleOther.pageThree.filter(item => item.id !== id);
        this.wOOthers = this.femaleOther.pageThree;
        localStorage.setItem('femaleOther', JSON.stringify(this.femaleOther));
      }
    }
  }

  handleChangeProductPage(page: number = 1): void {
    this.filterCategoryPage$.next(page);
    if (this.isProductType$.value === 'MJackets') {
      if (page === 1) {
        this.mJackets = this.mansJackets.pageOne;
        this.currentPage = page;
      } else if (page === 2) {
        this.mJackets = this.mansJackets.pageTwo;
        this.currentPage = page;
      } else if (page === 3) {
        this.mJackets = this.mansJackets.pageThree;
        this.currentPage = page;
      }
    }

    if (this.isProductType$.value === 'WJackets') {
      if (page === 1) {
        this.wJackets = this.femaleJackets.pageOne;
        this.wCurrentPage = page;
      } else if (page === 2) {
        this.wJackets = this.femaleJackets.pageTwo;
        this.wCurrentPage = page;
      } else if (page === 3) {
        this.wJackets = this.femaleJackets.pageThree;
        this.wCurrentPage = page;
      }
    }

    if (this.isProductType$.value === 'MShoes') {
      if (page === 1) {
        this.mSShoes = this.mansShoes.pageOne;
        this.mSCurrentPage = page;
      } else if (page === 2) {
        this.mSShoes = this.mansShoes.pageTwo;
        this.mSCurrentPage = page;
      } else if (page === 3) {
        this.mSShoes = this.mansShoes.pageThree;
        this.mSCurrentPage = page;
      }
    }

    if (this.isProductType$.value === 'WShoes') {
      if (page === 1) {
        this.wSShoes = this.femaleShoes.pageOne;
        this.wSCurrentPage = page;
      } else if (page === 2) {
        this.wSShoes = this.femaleShoes.pageTwo;
        this.wSCurrentPage = page;
      } else if (page === 3) {
        this.wSShoes = this.femaleShoes.pageThree;
        this.wSCurrentPage = page;
      }
    }

    if (this.isProductType$.value === 'MOthers') {
      if (page === 1) {
        this.mOOthers = this.mansOther.pageOne;
        this.mOCurrentPage = page;
      } else if (page === 2) {
        this.mOOthers = this.mansOther.pageTwo;
        this.mOCurrentPage = page;
      } else if (page === 3) {
        this.mOOthers = this.mansOther.pageThree;
        this.mOCurrentPage = page;
      }
    }

    if (this.isProductType$.value === 'WOthers') {
      if (page === 1) {
        this.wOOthers = this.femaleOther.pageOne;
        this.wOCurrentPage = page;
      } else if (page === 2) {
        this.wOOthers = this.femaleOther.pageTwo;
        this.wOCurrentPage = page;
      } else if (page === 3) {
        this.wOOthers = this.femaleOther.pageThree;
        this.wOCurrentPage = page;
      }
    }
  }
}
