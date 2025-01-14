import { LoggedUserModel } from "../../models/logged-user/logged-user-model";

export class UserRegistrationResponseDto {

    message!: string;
    user!: LoggedUserModel;

    constructor(
        message: string,
        email: string,
        username: string,
        socialName: string,
    ) {
        this.message = message;
        this.user = new LoggedUserModel(email, username, socialName);
    }

}
