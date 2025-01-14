import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateChatListComponent } from './private-chat-list.component';

describe('PrivateChatListComponent', () => {
  let component: PrivateChatListComponent;
  let fixture: ComponentFixture<PrivateChatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateChatListComponent]
    });
    fixture = TestBed.createComponent(PrivateChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
