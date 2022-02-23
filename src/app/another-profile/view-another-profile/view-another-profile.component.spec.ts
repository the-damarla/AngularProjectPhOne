import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnotherProfileComponent } from './view-another-profile.component';

describe('ViewAnotherProfileComponent', () => {
  let component: ViewAnotherProfileComponent;
  let fixture: ComponentFixture<ViewAnotherProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnotherProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnotherProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
