import { TestBed } from '@angular/core/testing';

import { ErrorhandlerService } from '../src/app/login/errorhandler.service';

describe('ErrorhandlerService', () => {
  let service: ErrorhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
