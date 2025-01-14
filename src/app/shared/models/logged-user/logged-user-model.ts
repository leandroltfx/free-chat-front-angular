export class LoggedUserModel {

    email!: string;
    username!: string;
    socialName!: string;

    constructor(
        email: string,
        username: string,
        socialName: string,
    ) {
        this.email = email;
        this.username = username;
        this.socialName = socialName;
    }
    
}
