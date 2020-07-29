import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {ImageModel} from '../../core/models/image.model';
import {FakeJsService} from '../../core/services/fake-js.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {

  list: ImageModel[];

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

  private getPhotos(): void {
    this.fakeService.getImages().subscribe(data => {
      if (data.length !== 0) {
        this.list = data;
      }
    });
  }

  private bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
}
