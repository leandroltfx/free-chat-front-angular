import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MessageService {

  private classesByMessageType = new Map(
    [
      ['success', 'fc-success-message'],
      ['error', 'fc-error-message'],
    ]
  );

  constructor(
    private readonly matSnackBar: MatSnackBar
  ) { }

  showMessage(
    message: string,
    type: string,
  ): void {
    this.matSnackBar.open(
      message,
      '',
      {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: this.classesByMessageType.get(type)
      }
    )
  }
}
