import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input() list: ImageModel[];

  @Output() selectImage = new EventEmitter<ImageModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectImage(image: ImageModel) {
    this.selectImage.emit(image);
  }
}
