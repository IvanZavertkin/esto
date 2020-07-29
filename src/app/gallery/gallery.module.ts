import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import {CoreModule} from '../core/core.module';



@NgModule({
  declarations: [GalleryComponent, GalleryListComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class GalleryModule { }
