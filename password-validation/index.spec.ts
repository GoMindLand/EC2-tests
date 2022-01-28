import {IValidationResult, validatePassword} from "./index";



describe("password validation input field", () => {

    test("should warn me if password characters long is less than 8", () => {
        const password = "1234567"
        const validator:IValidationResult = validatePassword(password)
        expect(validator.errorMsg).toEqual("Password must be at least 8 characters")
    })
    test("should not warn me if password characters long is 8", () => {
        const password = "12345678"
        const validator:IValidationResult = validatePassword(password)
        expect(validator.errorMsg).toEqual("")
    })
    test('should warn me when password doesn\'t any numbers', () => {
        const password = "azertyuip"
        const validator:IValidationResult = validatePassword(password)
        expect(validator.errorMsg).toEqual("Password must contain at least 2 numbers")
    })
    test('should warn me when password doesn\'t at least 2 numbers', () => {
        const password = "azertyu3ip2"
        const validator:IValidationResult = validatePassword(password)
        expect(validator.errorMsg).toEqual("Password must contain at least 2 numbers")
    })
    
})

export {}