import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fc-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent {

  public messageForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.messageForm = this._buildMessageForm();
  }

  public sendMessage(): void {
    if (this.messageForm.valid) {
      console.log('enviando mensagem...');
    }
  }

  private _buildMessageForm(): FormGroup {
    return this._formBuilder.group(
      {
        message: ''
      }
    )
  }

}
