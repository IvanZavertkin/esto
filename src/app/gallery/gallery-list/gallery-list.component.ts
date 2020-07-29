import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent {

  @Input() list: ImageModel[];

  @Output() selectImage = new EventEmitter<ImageModel>();

  constructor() { }

  onSelectImage(image: ImageModel) {
    this.selectImage.emit(image);
  }
}
