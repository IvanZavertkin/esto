import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isSingePhotoRoute: boolean = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter( event => event instanceof NavigationStart ))
      .subscribe( (data: NavigationStart ) => {
        if (data.url.indexOf('photos') >= 0) {
          this.isSingePhotoRoute = true;
        }
      } );
  }
}
