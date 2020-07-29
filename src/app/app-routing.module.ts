import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';


const routes: Routes = [
  {
    path: '',
    component: GalleryComponent
  },
  {
    path: 'favorites',
    component: GalleryComponent
  },
  {
    path: 'photos/:id',
    component: GalleryComponent
  },
  {
    path: '**',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
