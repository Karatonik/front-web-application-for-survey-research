import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratificationScreenComponent } from './gratification-screen.component';

describe('GratificationScreenComponent', () => {
  let component: GratificationScreenComponent;
  let fixture: ComponentFixture<GratificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GratificationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GratificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
