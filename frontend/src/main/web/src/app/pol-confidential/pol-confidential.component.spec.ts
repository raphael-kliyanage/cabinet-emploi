import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolConfidentialComponent } from './pol-confidential.component';

describe('PolConfidentialComponent', () => {
  let component: PolConfidentialComponent;
  let fixture: ComponentFixture<PolConfidentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolConfidentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolConfidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
