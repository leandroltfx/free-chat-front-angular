import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { CoreModule } from '../../core.module';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ]
    });
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
