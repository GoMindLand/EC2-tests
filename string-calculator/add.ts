export const stringCalculator = {
  add: (stringNumber: string): number => {
    let result = 0
    const newLine = "\n"
    let delimiter = ","
    const lines = stringNumber.split(newLine)

    for (const line of lines) {
      if (line.startsWith("//")) {
        delimiter = line.substring(2)
        continue
      }
      if (line.endsWith(delimiter)) throw new Error("Syntax error")

      const values: string[] = line.split(delimiter)
      for (const value of values) {
        result += Number(value)
      }
    }

    return result
  },
}
