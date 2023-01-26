import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'file-component',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})

export class FileComponent {

  public photo: string = 'https://vsegda-pomnim.com/uploads/posts/2022-04/1651198030_10-vsegda-pomnim-com-p-yagoda-malinka-kto-snimalsya-v-klipe-foto-11.png';
  @Output() inputClick = new EventEmitter();

  constructor() { }

  handleGiveFile(image: any) {
    this.photo = image.target.value;
    this.inputClick.emit(this.photo);
  }
}
