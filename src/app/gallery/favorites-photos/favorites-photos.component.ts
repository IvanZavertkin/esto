import { Component, OnInit } from '@angular/core';
import {ImageModel} from '../../core/models/image.model';
import {ImageTypeEnum} from '../../core/enums/image-type.enum';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Component({
  selector: 'app-favorites-photos',
  templateUrl: './favorites-photos.component.html',
  styleUrls: ['./favorites-photos.component.scss']
})
export class FavoritesPhotosComponent implements OnInit {

  list: ImageModel[];

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.list = this.localStorageService.get(ImageTypeEnum.FavoriteImage) as ImageModel[];
  }

  onSelectImage(image: ImageModel) {
    this.router.navigate(['/photos', image.id]);
  }
}
