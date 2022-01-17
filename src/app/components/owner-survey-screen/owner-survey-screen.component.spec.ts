import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSurveyScreenComponent } from './owner-survey-screen.component';

describe('OwnerSurveyScreenComponent', () => {
  let component: OwnerSurveyScreenComponent;
  let fixture: ComponentFixture<OwnerSurveyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSurveyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerSurveyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
