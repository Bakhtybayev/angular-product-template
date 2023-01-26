import { Component } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: 'side-bar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  public firstDown: boolean = false;
  public secondDown: boolean = false;
  public thirdDown: boolean = false;
  public fourthDown: boolean = false;
  public fifthDown: boolean = false;

  constructor(public sidebarService: SidebarService, private productService: ProductsService) { }

  public sidebarWidth: number = 220;
  public sidebarPadding: number = 20;

  generalChangeLine(type: string, gender: string): void {
    // main conditions for sidebar
    if (type === 'Clothes' && gender === '') {
      this.sidebarService.isCloseOpen = true;
      this.sidebarService.isShoesOpen = false;
      this.sidebarService.isOtherOpen = false;
      this.firstDown = true;
      this.secondDown = false;
      this.thirdDown = false;
      this.productService.title$.next('<Одежды>');
    }
    if (type === 'Shoes' && gender === '') {
      this.sidebarService.isShoesOpen = true;
      this.sidebarService.isCloseOpen = false;
      this.sidebarService.isOtherOpen = false;
      this.productService.isProductType$.next('MShoes');
      this.secondDown = true;
      this.firstDown = false;
      this.thirdDown = false;
      this.productService.title$.next('Мужские <Обуви>');
    }
    if (type === 'Other' && gender === '') {
      this.sidebarService.isOtherOpen = true;
      this.sidebarService.isOtherOpenMale = false;
      this.sidebarService.isShoesOpen = false;
      this.sidebarService.isCloseOpen = false;
      this.productService.isProductType$.next('MOthers');
      this.thirdDown = true;
      this.secondDown = false;
      this.firstDown = false;
      this.productService.title$.next('Мужские <Другое>');
    }
    // inner conditions for sidebar
    if (type === 'Clothes' && gender === 'Male') {
      this.sidebarService.isCloseInnerMale = true;
      this.sidebarService.isCloseInnerFemale = false;
      this.productService.isProductType$.next('MJackets');
      this.thirdDown = false;
      this.secondDown = false;
      this.firstDown = true;
      this.fifthDown = false;
      this.fourthDown = true;
      this.productService.title$.next('Мужские <Верхние Одежды>');
    } else if (type === 'Clothes' && gender === 'Female') {
      this.sidebarService.isCloseInnerFemale = true;
      this.sidebarService.isCloseInnerMale = false;
      this.productService.isProductType$.next('WJackets');
      this.thirdDown = false;
      this.secondDown = false;
      this.firstDown = true;
      this.fifthDown = true;
      this.fourthDown = false;
      this.productService.title$.next('Женские <Верхние Одежды>');
    }
    if (type === 'Shoes' && gender === 'Male') {
      this.sidebarService.isShoesOpenMale = true;
      this.sidebarService.isShoesOpenFemale = false;
      this.productService.isProductType$.next('MShoes');
      this.productService.title$.next('Мужские <Обуви>');
    } else if (type === 'Shoes' && gender === 'Female') {
      this.sidebarService.isShoesOpenFemale = true;
      this.sidebarService.isShoesOpenMale = false;
      this.sidebarService.isShoesInnerMaleInLineDefault = false;
      this.productService.isProductType$.next('WShoes');
      this.productService.title$.next('Женские <Обуви>');
    }
    if (type === 'Other' && gender === 'Male') {
      this.sidebarService.isOtherOpenMale = true;
      this.sidebarService.isOtherOpenFemale = false;
      this.productService.isProductType$.next('MOthers');
      this.productService.title$.next('Мужские <Другое>');
    } else if (type === 'Other' && gender === 'Female') {
      this.sidebarService.isOtherOpenFemale = true;
      this.sidebarService.isOtherOpenMale = false;
      this.sidebarService.isOtherInnerMaleInLineDefault = false;
      this.productService.isProductType$.next('WOthers');
      this.productService.title$.next('Женские <Другое>');
    }
  }
}
