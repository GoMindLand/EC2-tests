import { stringCalculator } from "./add"

describe("String calculator", () => {
  test.each([
    {
      caseMsg: "It should add nothing when empty string is provided",
      stringNumbers: "",
      expectedResult: 0,
    },
    {
      caseMsg: "It should add one number",
      stringNumbers: "1",
      expectedResult: 1,
    },
    {
      caseMsg: "It should add two numbers",
      stringNumbers: "1,0",
      expectedResult: 1,
    },
    {
      caseMsg: "It should add two numbers",
      stringNumbers: "1,2",
      expectedResult: 3,
    },
    {
      caseMsg: "It should add two numbers",
      stringNumbers: "10,2",
      expectedResult: 12,
    },
    {
      caseMsg: "It should add three numbers",
      stringNumbers: "10,2,1",
      expectedResult: 13,
    },
    {
      caseMsg: "It should add many numbers",
      stringNumbers: "10,2,1,1,2",
      expectedResult: 16,
    },
    {
      caseMsg: "It should add new line separator",
      stringNumbers: "1,2\n3",
      expectedResult: 6,
    },
  ])("$caseMsg", async (args) => {
    const { stringNumbers, expectedResult } = args
    const result: number = stringCalculator.add(stringNumbers)
    expect(result).toBe(expectedResult)
  })
})
export {}
