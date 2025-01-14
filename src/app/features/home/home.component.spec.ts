import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
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
        UserSectionComponent,
        GroupChatListComponent,
        PrivateChatListComponent,
      ],
      imports: [
        BrowserAnimationsModule,

        MatTabsModule,
        MatIconModule,
        MatButtonModule,
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
