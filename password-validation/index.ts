import {errorMessage} from "./errorMessageEnum";

const regex = /\d{2}/g
export interface IValidationResult {
    isValid: boolean
    errorMsg: string
}

function makeValidation(errorMsg:string) {
    return {
        isValid: false,
        errorMsg
    }
}

export function validatePassword(password: string): IValidationResult {
    if(!regex.test(password)) return makeValidation(errorMessage.atLeastTwoNumbers)
    if(password.length > 7) return makeValidation("")

    return makeValidation(errorMessage.notValidCharacterLong);
}

