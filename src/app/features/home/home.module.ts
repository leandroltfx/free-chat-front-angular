import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { GroupChatListComponent } from './components/chat-list/group-chat-list/group-chat-list.component';
import { PrivateChatListComponent } from './components/chat-list/private-chat-list/private-chat-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChatListComponent,
    PrivateChatListComponent,
    GroupChatListComponent,
  ],
  imports: [
    CommonModule,

    MatTabsModule,

    HomeRoutingModule,
  ]
})
export class HomeModule { }
