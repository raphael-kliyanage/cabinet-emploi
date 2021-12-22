import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWhyusComponent } from './main-whyus.component';

describe('MainWhyusComponent', () => {
  let component: MainWhyusComponent;
  let fixture: ComponentFixture<MainWhyusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWhyusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWhyusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
