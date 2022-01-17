import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyScreenComponent } from './create-survey-screen.component';

describe('CreateSurveyScreenComponent', () => {
  let component: CreateSurveyScreenComponent;
  let fixture: ComponentFixture<CreateSurveyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSurveyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSurveyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
