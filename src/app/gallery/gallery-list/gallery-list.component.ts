import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  @Input() list: ImageModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
