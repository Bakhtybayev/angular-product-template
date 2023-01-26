import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'pagination-common',
  templateUrl: './pagination.common.html',
  styleUrls: ['./pagination.common.scss']
})

export class Pagination {
  // listName, pageChange, pagesCount, currentPage, totalMoviesCount, pageMoviesCount, portionItemsCount = 5,

  @Output() pageChange = new EventEmitter();
  @Input() pagesCount: any;
  @Input() currentPage: any;
  @Input() totalProductsCount: any;
  @Input() pageProductsCount: any;
  @Input() portionProductsCount: number = 5;
  @Input() type: string = '';

  // pagination variables
  public pages: number[] = [];
  public portionCount: number = 0;
  public currentPortion: number = 0;
  public portionsFirstElem: number = 0;
  public portionsLastElem: number = 0;
  public productsFirstElem: number = 0;
  public productsLastElem: number = 0;
  public pagination: any;
  public htmlButton: any;

  constructor() {
    // initialization
    this.pagesCount = this.type === 'MJackets' ?
      localStorage.getItem('pagesCount') :
      this.type === 'WJackets' ? localStorage.getItem('mPagesCount') :
        this.type === 'mShoes' ? localStorage.getItem('mSPagesCount') :
          this.type === 'wShoes' ? localStorage.getItem('wSPagesCount') :
            this.type === 'mOOthers' ? localStorage.getItem('mOPagesCount') :
              this.type === 'wOOthers' ? localStorage.getItem('wOPagesCount') : localStorage.getItem('pagesCount');
    this.pagesCount = JSON.parse(this.pagesCount);

    this.currentPage = this.type === 'MJackets' ?
      localStorage.getItem('currentPage') :
      this.type === 'WJackets' ? localStorage.getItem('mCurrentPage') :
        this.type === 'mShoes' ? localStorage.getItem('mSCurrentPage') :
          this.type === 'wShoes' ? localStorage.getItem('wSCurrentPage') :
            this.type === 'mOOthers' ? localStorage.getItem('mOCurrentPage') :
              this.type === 'wOOthers' ? localStorage.getItem('wOCurrentPage') : localStorage.getItem('currentPage');
    this.currentPage = JSON.parse(this.currentPage);

    this.totalProductsCount = this.type === 'MJackets' ?
      localStorage.getItem('totalProductsCount') :
      this.type === 'WJackets' ? localStorage.getItem('mTotalProductsCount') :
        this.type === 'mShoes' ? localStorage.getItem('mSTotalProductsCount') :
          this.type === 'wShoes' ? localStorage.getItem('wSTotalProductsCount') :
            this.type === 'mOOthers' ? localStorage.getItem('mOTotalProductsCount') :
              this.type === 'wOOthers' ? localStorage.getItem('wOTotalProductsCount') : localStorage.getItem('totalProductsCount');
    this.totalProductsCount = JSON.parse(this.totalProductsCount);

    this.pageProductsCount = this.type === 'MJackets' ?
      localStorage.getItem('pageProductsCount') :
      this.type === 'WJackets' ? localStorage.getItem('mPageProductsCount') :
        this.type === 'mShoes' ? localStorage.getItem('mSPageProductsCount') :
          this.type === 'wShoes' ? localStorage.getItem('wSPageProductsCount') :
            this.type === 'mOOthers' ? localStorage.getItem('mOPageProductsCount') :
              this.type === 'wOOthers' ? localStorage.getItem('wOPageProductsCount') : localStorage.getItem('pageProductsCount');
    this.pageProductsCount = JSON.parse(this.pageProductsCount);

    // started
    for (let i = 0; i <= this.pagesCount; i++) this.pages.push(i);

    this.portionCount = Math.ceil(this.pagesCount / this.portionProductsCount);
    this.portionsFirstElem = (this.currentPortion * this.portionProductsCount) + 1;
    this.portionsLastElem = (this.currentPortion + 1) * this.portionProductsCount;
    this.productsFirstElem = (this.currentPage - 1) * this.portionProductsCount + 1;
    this.productsLastElem = (this.currentPage * this.pageProductsCount) > this.totalProductsCount ?
      this.totalProductsCount : (this.currentPage * this.pageProductsCount);

    this.pagination = this.pages.filter(page => {
      return this.portionsFirstElem <= page && page <= this.portionsLastElem;
    }).map(page => {
      return page
    })
  }

  handleSetCurrentPortion(portion: number): void {
    this.pageChange.emit(portion);
    this.currentPortion = portion;
  }
}
