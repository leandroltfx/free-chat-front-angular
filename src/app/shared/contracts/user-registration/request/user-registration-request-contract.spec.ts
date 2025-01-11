import { UserRegistrationRequestContract } from './user-registration-request-contract';

describe('UserRegistrationRequestContract', () => {
  it('should create an instance', () => {
    expect(new UserRegistrationRequestContract('User', 'username', 'email@email.com', 'asd123asd')).toBeTruthy();
  });
});
