import { LoggedUserModel } from "src/app/shared/models/logged-user/logged-user-model";

export class LoginResponseContract {

    message!: string;
    user!: LoggedUserModel;

    constructor(
        message: string,
        user: LoggedUserModel,
    ) {
        this.message = message;
        this.user = user;
    }

}
