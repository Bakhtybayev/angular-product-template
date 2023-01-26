import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  @Input() title: string = '';
  @Input() placeholder: string = ''
  @Input() required: boolean = false;
  @Input() requiredText: string = '';
  @Input() formValue?: string | number;
  @Output() inputClick = new EventEmitter();

  constructor() { }
}
