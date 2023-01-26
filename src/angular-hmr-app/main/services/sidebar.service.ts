import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  constructor() { }

  public isCloseOpen: boolean = false;
  public isShoesOpen: boolean = false;
  public isOtherOpen: boolean = false;
  public isCloseInnerFemale: boolean = false;
  public isCloseInnerMale: boolean = false;
  // lines
  public isCloseInnerFemaleInLine: boolean = false;
  public isCloseInnerMaleInLine: boolean = false;
  public isShoesOpenFemale: boolean = false;
  public isShoesOpenMale: boolean = false;
  public isOtherOpenFemale: boolean = false;
  public isOtherOpenMale: boolean = false;
  // defaultOpens
  public isCloseInnerMaleInLineDefault: boolean = true;
  public isShoesInnerMaleInLineDefault: boolean = true;
  public isOtherInnerMaleInLineDefault: boolean = true;
  public isCloseInnerFemaleInLineDefault: boolean = true;
}
