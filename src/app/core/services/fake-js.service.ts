import { Injectable } from '@angular/core';
import * as faker from 'faker';
import {Observable, of} from 'rxjs';
import {ImageModel} from '../models/image.model';

@Injectable()
export class FakeJsService {

  private imageArray: ImageModel[] = [];

  constructor() { }

  getImages(): Observable<ImageModel[]> {
    do {
      this.imageArray.push({
        id: faker.random.uuid(),
        url: faker.random.image()
      });
    } while (this.imageArray.length < 10);

    return of(this.imageArray);
  }

  loadNewImages(): Observable<ImageModel[]> {
    let count = 0;
    do {
      this.imageArray.push({
        id: faker.random.uuid(),
        url: faker.random.image()
      });
      count++;
    } while (count < 10);

    return of(this.imageArray);
  }
}
