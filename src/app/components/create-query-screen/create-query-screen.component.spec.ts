import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueryScreenComponent } from './create-query-screen.component';

describe('CreateQueryScreenComponent', () => {
  let component: CreateQueryScreenComponent;
  let fixture: ComponentFixture<CreateQueryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQueryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQueryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
