import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWitnessComponent } from './main-witness.component';

describe('MainWitnessComponent', () => {
  let component: MainWitnessComponent;
  let fixture: ComponentFixture<MainWitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWitnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
