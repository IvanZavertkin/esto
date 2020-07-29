import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  get(key: string) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
