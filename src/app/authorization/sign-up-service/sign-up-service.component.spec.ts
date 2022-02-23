import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpServiceComponent } from './sign-up-service.component';

describe('SignUpServiceComponent', () => {
  let component: SignUpServiceComponent;
  let fixture: ComponentFixture<SignUpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
