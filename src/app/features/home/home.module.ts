import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { GroupChatListComponent } from './components/chat-list/group-chat-list/group-chat-list.component';
import { PrivateChatListComponent } from './components/chat-list/private-chat-list/private-chat-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChatListComponent,
    ActiveChatComponent,
    UserSectionComponent,
    GroupChatListComponent,
    PrivateChatListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

    HomeRoutingModule,
  ]
})
export class HomeModule { }
