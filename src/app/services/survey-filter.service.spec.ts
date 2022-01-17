import { TestBed } from '@angular/core/testing';

import { SurveyFilterService } from './survey-filter.service';

describe('SurveyFilterService', () => {
  let service: SurveyFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
