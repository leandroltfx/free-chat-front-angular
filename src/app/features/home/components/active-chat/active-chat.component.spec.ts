import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ActiveChatComponent } from './active-chat.component';

describe('ActiveChatComponent', () => {
  let component: ActiveChatComponent;
  let fixture: ComponentFixture<ActiveChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveChatComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
      ]
    });
    fixture = TestBed.createComponent(ActiveChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
