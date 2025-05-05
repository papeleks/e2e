export class LoginModel {

    private readonly _emailId: string;
    private readonly _password: string;

    constructor(emailId: string, password: string) {
        this._emailId = emailId;
        this._password = password;
    }


    get emailId(): string {
        return this._emailId;
    }

    get password(): string {
        return this._password;
    }

}