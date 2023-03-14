import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserheadingComponent } from './userheading.component';

describe('UserheadingComponent', () => {
  let component: UserheadingComponent;
  let fixture: ComponentFixture<UserheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserheadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
