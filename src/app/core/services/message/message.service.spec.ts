import { TestBed } from '@angular/core/testing';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CoreModule } from '../../core.module';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {

    matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ],
      providers: [
        { provide: MatSnackBar, useValue: matSnackBarSpy }
      ]
    });
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(messageService).toBeTruthy();
  });

  it('showMessage', () => {

    messageService.showMessage('message', 'success');

    expect(matSnackBarSpy.open).toHaveBeenCalled();
  });
});
