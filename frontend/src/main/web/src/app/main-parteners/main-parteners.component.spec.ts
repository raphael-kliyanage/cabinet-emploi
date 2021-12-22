import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartenersComponent } from './main-parteners.component';

describe('MainPartenersComponent', () => {
  let component: MainPartenersComponent;
  let fixture: ComponentFixture<MainPartenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPartenersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPartenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
