import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { GroupChatListComponent } from './components/chat-list/group-chat-list/group-chat-list.component';
import { PrivateChatListComponent } from './components/chat-list/private-chat-list/private-chat-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChatListComponent,
    UserSectionComponent,
    GroupChatListComponent,
    PrivateChatListComponent,
  ],
  imports: [
    CommonModule,

    MatTabsModule,
    MatIconModule,
    MatButtonModule,

    HomeRoutingModule,
  ]
})
export class HomeModule { }
