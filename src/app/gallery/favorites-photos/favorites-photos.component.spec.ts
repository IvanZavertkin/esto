import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPhotosComponent } from './favorites-photos.component';

describe('FavoritesPhotosComponent', () => {
  let component: FavoritesPhotosComponent;
  let fixture: ComponentFixture<FavoritesPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
