import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFootComponent } from './bottom-foot.component';

describe('BottomFootComponent', () => {
  let component: BottomFootComponent;
  let fixture: ComponentFixture<BottomFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
