import {Component, OnInit} from '@angular/core';
import {FakeJsService} from '../core/services/fake-js.service';
import {ImageModel} from '../core/models/image.model';
import {switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  list: ImageModel[];

  constructor(
    private fakeService: FakeJsService
  ) {
  }

  ngOnInit(): void {
    this.fakeService.getImages().subscribe(data => {
      if (data.length !== 0) {
        this.list = data;
      }
    });
  }

  loadNew() {
    this.fakeService.loadNewImages().subscribe(data => {
      console.log(data);
      this.list = data;
    });
  }
}
