import { Component, Input } from "@angular/core";

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() type: string = 'add';
  @Input() fromNewProduct: boolean = false;

  constructor() { }
}
