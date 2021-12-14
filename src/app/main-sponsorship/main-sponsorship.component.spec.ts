import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSponsorshipComponent } from './main-sponsorship.component';

describe('MainSponsorshipComponent', () => {
  let component: MainSponsorshipComponent;
  let fixture: ComponentFixture<MainSponsorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSponsorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
