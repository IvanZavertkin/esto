import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';
import {FakeJsService} from '../../core/services/fake-js.service';
import {Subscription} from 'rxjs';
import {ImageTypeEnum} from '../../core/enums/image-type.enum';
import {LocalStorageService} from '../../core/services/local-storage.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  list: ImageModel[];

  isLoad: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.isLoad = true;
      // Emulate real-world API
      setTimeout(() => {
        this.list = [...this.list, ...this.fakeService.getImages()] as ImageModel[];
        this.isLoad = false;
      }, 200);
    }
  }

  constructor(
    private fakeService: FakeJsService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.list = this.fakeService.getImages();
  }

  addToFavorites(image: ImageModel): void {
    const favoriteImages: ImageModel[] = this.localStorageService.get(ImageTypeEnum.FavoriteImage);
    if (favoriteImages) {
      favoriteImages.push(image);
      this.localStorageService.set(ImageTypeEnum.FavoriteImage, favoriteImages);
    } else {
      this.localStorageService.set(ImageTypeEnum.FavoriteImage, [image]);
    }
  }

  private bottomReached(): boolean {
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight );

    return height === (window.innerHeight + window.scrollY);
  }
}
