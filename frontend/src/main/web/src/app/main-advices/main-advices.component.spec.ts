import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdvicesComponent } from './main-advices.component';

describe('MainAdvicesComponent', () => {
  let component: MainAdvicesComponent;
  let fixture: ComponentFixture<MainAdvicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdvicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
