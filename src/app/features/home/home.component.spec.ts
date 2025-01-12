import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './home.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { GroupChatListComponent } from './components/chat-list/group-chat-list/group-chat-list.component';
import { PrivateChatListComponent } from './components/chat-list/private-chat-list/private-chat-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ChatListComponent,
        GroupChatListComponent,
        PrivateChatListComponent,
      ],
      imports: [
        BrowserAnimationsModule,

        MatTabsModule,
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
