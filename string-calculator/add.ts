export const stringCalculator = {
  add: (stringNumber: string): number => {
    let result = 0
    let values: string[] = stringNumber.split(",")

    for (const value of values) {
      result += Number(value)
    }
    return result
  },
}
