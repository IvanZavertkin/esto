import { Component, OnInit } from '@angular/core';
import {ImageModel} from '../../core/models/image.model';
import {ImageTypeEnum} from '../../core/enums/image-type.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites-photos',
  templateUrl: './favorites-photos.component.html',
  styleUrls: ['./favorites-photos.component.scss']
})
export class FavoritesPhotosComponent implements OnInit {

  list: ImageModel[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavoriteImagesFromLocalStorage();
  }

  onSelectImage(image: ImageModel) {
    this.router.navigate(['/photos', image.id]);
  }

  private getFavoriteImagesFromLocalStorage(): void {
    if (localStorage.getItem(ImageTypeEnum.FavoriteImage)) {
      this.list = JSON.parse(localStorage.getItem(ImageTypeEnum.FavoriteImage));
    }
  }
}
