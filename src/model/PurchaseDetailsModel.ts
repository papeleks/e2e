import {Currencies} from "../enums/Currencies";

export class PurchaseDetailsModel {

    private readonly _fullName: string;
    private readonly _email: string;
    private readonly _phone: string;
    private readonly _currency: Currencies;
    private readonly _payments: [string, string][];

    constructor(fullName: string, email: string, phone: string, currency: Currencies, details: [string, string][]) {
        this._fullName = fullName;
        this._email = email;
        this._phone = phone;
        this._currency = currency;
        this._payments = details;
    }


    get fullName(): string {
        return this._fullName;
    }

    get email(): string {
        return this._email;
    }

    get phone(): string {
        return this._phone;
    }

    get currency(): Currencies {
        return this._currency;
    }

    get payments(): [string, string][] {
        return this._payments;
    }
}