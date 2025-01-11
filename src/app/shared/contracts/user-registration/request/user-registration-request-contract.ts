export class UserRegistrationRequestContract {

    socialName!: string;
    username!: string;
    email!: string;
    password!: string;

    constructor(
        socialName: string,
        username: string,
        email: string,
        password: string,
    ) {
        this.socialName = socialName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

}
