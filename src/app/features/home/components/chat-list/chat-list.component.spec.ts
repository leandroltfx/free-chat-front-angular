import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

import { ChatListComponent } from './chat-list.component';
import { GroupChatListComponent } from './group-chat-list/group-chat-list.component';
import { PrivateChatListComponent } from './private-chat-list/private-chat-list.component';

describe('ChatListComponent', () => {
  let component: ChatListComponent;
  let fixture: ComponentFixture<ChatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatListComponent,
        GroupChatListComponent,
        PrivateChatListComponent,
      ],
      imports: [
        BrowserAnimationsModule,

        MatTabsModule,
      ]
    });
    fixture = TestBed.createComponent(ChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
