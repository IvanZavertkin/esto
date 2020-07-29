import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import {CoreModule} from '../core/core.module';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesPhotosComponent } from './favorites-photos/favorites-photos.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';



@NgModule({
  declarations: [GalleryListComponent, PhotosComponent, FavoritesPhotosComponent, SinglePhotoComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class GalleryModule { }
