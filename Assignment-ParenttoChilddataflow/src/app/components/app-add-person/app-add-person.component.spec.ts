import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddPersonComponent } from './app-add-person.component';

describe('AppAddPersonComponent', () => {
  let component: AppAddPersonComponent;
  let fixture: ComponentFixture<AppAddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
