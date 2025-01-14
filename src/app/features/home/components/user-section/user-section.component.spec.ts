import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { UserSectionComponent } from './user-section.component';

describe('UserSectionComponent', () => {
  let component: UserSectionComponent;
  let fixture: ComponentFixture<UserSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserSectionComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
      ]
    });
    fixture = TestBed.createComponent(UserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
