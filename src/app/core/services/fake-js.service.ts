import { Injectable } from '@angular/core';
import * as faker from 'faker';
import {ImageModel} from '../models/image.model';

@Injectable()
export class FakeJsService {

  constructor() { }

  getImages(): ImageModel[] {
    const images: ImageModel[] = [];
    for (let i = 0; i < 10; i++) {
      images.push({
        id: faker.random.uuid(),
        url: faker.random.image()
      });
    }
    console.log(images);
    return images;
  }
}
