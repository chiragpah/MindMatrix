import { TestBed } from '@angular/core/testing';

import { CourseplayerService } from './courseplayer.service';

describe('CourseplayerService', () => {
  let service: CourseplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
