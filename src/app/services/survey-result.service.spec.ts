import { TestBed } from '@angular/core/testing';

import { SurveyResultService } from './survey-result.service';

describe('SurveyResultService', () => {
  let service: SurveyResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
