import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeScreenComponent } from './analyze-screen.component';

describe('AnalyzeScreenComponent', () => {
  let component: AnalyzeScreenComponent;
  let fixture: ComponentFixture<AnalyzeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
