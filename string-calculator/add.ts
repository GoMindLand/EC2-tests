export const stringCalculator = {
  add: (stringNumber: string): number => {
    let result = 0
    let values: string[] = stringNumber.split(",")
    let valueNumber = values[0]
    if (isThereSecondValue(values)) {
      let secondValue = values[1]
      result += Number(secondValue)
    }
    return (result += Number(valueNumber) || 0)
  },
}
function isThereSecondValue(stringNumbers: string[]) {
  return stringNumbers.length > 1
}
