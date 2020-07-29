import { Injectable } from '@angular/core';
import * as faker from 'faker';
import {Observable, of} from 'rxjs';
import {ImageModel} from '../models/image.model';

@Injectable()
export class FakeJsService {

  private imageArray: ImageModel[] = [];

  constructor() { }

  getImages(): Observable<ImageModel[]> {
    const images: ImageModel[] = [];
    do {
      images.push({
        id: faker.random.uuid(),
        url: faker.random.image()
      });
    } while (images.length < 10);

    this.imageArray = [...images];
    return of(this.imageArray);
  }

  loadNewImages(): void {
    let count = 0;
    do {
      this.imageArray.push({
        id: faker.random.uuid(),
        url: faker.random.image()
      });
      count++;
    } while (count < 10);
  }
}
