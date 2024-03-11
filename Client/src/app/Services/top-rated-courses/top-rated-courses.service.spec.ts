import { TestBed } from '@angular/core/testing';

import { TopRatedCoursesService } from './top-rated-courses.service';

describe('TopRatedCoursesService', () => {
  let service: TopRatedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRatedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
