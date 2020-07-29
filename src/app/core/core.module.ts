import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FakeJsService} from './services/fake-js.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [FakeJsService]
})
export class CoreModule { }
