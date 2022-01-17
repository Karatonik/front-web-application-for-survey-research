import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassScreenComponent } from './forgot-pass-screen.component';

describe('ForgotPassScreenComponent', () => {
  let component: ForgotPassScreenComponent;
  let fixture: ComponentFixture<ForgotPassScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPassScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
