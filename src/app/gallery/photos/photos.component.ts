import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';
import {FakeJsService} from '../../core/services/fake-js.service';
import {Subscription} from 'rxjs';
import {ImageTypeEnum} from '../../core/enums/image-type.enum';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  list: ImageModel[];

  private subscription: Subscription = new Subscription();

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.fakeService.loadNewImages();
    }
  }

  constructor(
    private fakeService: FakeJsService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToFavorites(image: ImageModel): void {
    const favoriteImages: string = localStorage.getItem(ImageTypeEnum.FavoriteImage);
    if (favoriteImages) {
      const favoriteImagesArray = JSON.parse(favoriteImages);
      favoriteImagesArray.push(image);
      localStorage.setItem(ImageTypeEnum.FavoriteImage, JSON.stringify(favoriteImagesArray));
    } else {
      localStorage.setItem(ImageTypeEnum.FavoriteImage, JSON.stringify([image]));
    }
  }

  private getPhotos(): void {
    this.subscription.add(
      this.fakeService.getImages().subscribe(data => {
        if (data.length !== 0) {
          this.list = data;
        }
      })
    );
  }

  private bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
