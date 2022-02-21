import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSingleCardComponent } from './home-single-card.component';

describe('HomeSingleCardComponent', () => {
  let component: HomeSingleCardComponent;
  let fixture: ComponentFixture<HomeSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSingleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
