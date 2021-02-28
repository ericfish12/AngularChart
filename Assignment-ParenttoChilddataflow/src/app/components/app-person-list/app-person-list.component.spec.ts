import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPersonListComponent } from './app-person-list.component';

describe('AppPersonListComponent', () => {
  let component: AppPersonListComponent;
  let fixture: ComponentFixture<AppPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
