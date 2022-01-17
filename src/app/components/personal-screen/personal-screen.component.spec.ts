import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalScreenComponent } from './personal-screen.component';

describe('PersonalScreenComponent', () => {
  let component: PersonalScreenComponent;
  let fixture: ComponentFixture<PersonalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
