export class HttpErrorResponseDto {

    message!: string;

    constructor(
        message: string,
    ) {
        this.message = message;
    }

}
