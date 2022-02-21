import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSingleCardComponent } from './notification-single-card.component';

describe('NotificationSingleCardComponent', () => {
  let component: NotificationSingleCardComponent;
  let fixture: ComponentFixture<NotificationSingleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationSingleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
