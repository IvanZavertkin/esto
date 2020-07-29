import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FakeJsService} from './services/fake-js.service';
import {HttpClientModule} from '@angular/common/http';
import {LocalStorageService} from './services/local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [FakeJsService, LocalStorageService]
})
export class CoreModule { }
