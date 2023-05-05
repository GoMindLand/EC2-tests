// interface du résultat
export interface IValidationResult {
  isValid: boolean;
  errorMsg: string;
}

export function passwordValidator(password: string): IValidationResult {
  // écrire votre solution ici
}
