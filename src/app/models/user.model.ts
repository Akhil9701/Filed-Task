import { required,email, numeric, NumericValueType } from "@rxweb/reactive-form-validators"

export class User {

    @required()
    firstName: string;

    @required()
    lastName: string;

    @required()
    @email()
    email: string;

    @required()
    @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
    monthlyAdBudget: number;

    @required()
    @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false })
    phone: number;

}

