export const stringCalculator = {
  add: (stringNumber: string): number => {
    let result = 0
    const lines = stringNumber.split("\n")
    const values: string[] = lines[0].split(",")

    for (const value of values) {
      result += Number(value)
    }
    if (lines[1]) {
      result += stringCalculator.add(lines[1])
    }
    return result
  },
}
