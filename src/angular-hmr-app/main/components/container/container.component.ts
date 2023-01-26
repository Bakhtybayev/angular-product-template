import { Component, Input } from "@angular/core";

@Component({
  selector: 'container-component',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss']
})

export class ContainerComponent {
  @Input() width: number = 200;
  @Input() padding: number = 20;
  @Input() center: boolean = false;

  constructor() { }
  // public testWidth: number = 200;
  // public testPadding: number = 20;
}
