import { HttpErrorResponseDto } from './http-error-response-dto';

describe('HttpErrorResponseDto', () => {
  it('should create an instance', () => {
    expect(new HttpErrorResponseDto('erro')).toBeTruthy();
  });
});
