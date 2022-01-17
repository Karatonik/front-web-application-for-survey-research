import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchScreenComponent } from './research-screen.component';

describe('ResearchScreenComponent', () => {
  let component: ResearchScreenComponent;
  let fixture: ComponentFixture<ResearchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
