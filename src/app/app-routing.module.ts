import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotosComponent} from './gallery/photos/photos.component';
import {FavoritesPhotosComponent} from './gallery/favorites-photos/favorites-photos.component';
import {SinglePhotoComponent} from './gallery/single-photo/single-photo.component';


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  },
  {
    path: 'favorites',
    component: FavoritesPhotosComponent,
  },
  {
    path: 'photos/:id',
    component: SinglePhotoComponent
  },
  {
    path: '**',
    component: PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
