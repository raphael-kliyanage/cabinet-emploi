import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLegalComponent } from './m-legal.component';

describe('MLegalComponent', () => {
  let component: MLegalComponent;
  let fixture: ComponentFixture<MLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLegalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
