import { TestBed } from '@angular/core/testing';

import { FakeJsService } from './fake-js.service';

describe('FakeJsService', () => {
  let service: FakeJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
