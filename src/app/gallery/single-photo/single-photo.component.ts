import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageTypeEnum} from '../../core/enums/image-type.enum';
import {ImageModel} from '../../core/models/image.model';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {

  image: ImageModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getImageFromLocalStorage();
  }

  getImageFromLocalStorage() {
    const images: ImageModel[] = this.localStorageService.get(ImageTypeEnum.FavoriteImage);
    if (images && images.length > 0) {
      this.image = images.find(image => image.id === this.activatedRoute.snapshot.params.id);
    }
  }

  removeFromFavorites() {
    const images: ImageModel[] = this.localStorageService.get(ImageTypeEnum.FavoriteImage)
        .filter(image => image.id !== this.image.id);
    this.localStorageService.set(ImageTypeEnum.FavoriteImage, images);
  }
}
