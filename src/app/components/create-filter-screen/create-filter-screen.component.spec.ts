import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilterScreenComponent } from './create-filter-screen.component';

describe('CreateFilterScreenComponent', () => {
  let component: CreateFilterScreenComponent;
  let fixture: ComponentFixture<CreateFilterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFilterScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFilterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
