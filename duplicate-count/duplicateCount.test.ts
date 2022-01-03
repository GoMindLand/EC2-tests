import { duplicateCount } from "."

describe("duplicate count", () => {
  test("should get 0 as count number in a empty text", () => {
    expect(duplicateCount("")).toEqual(0)
  })
  test("should get 0 as count number in a given text", () => {
    expect(duplicateCount("abcdefgh")).toEqual(0)
  })
  test("should get 1 as count number in a given text with lowercase", () => {
    expect(duplicateCount("aacdefgh")).toEqual(1)
  })
  test("should get 4 as count number in given text", () => {
    expect(duplicateCount("aabbccddefgh")).toEqual(4)
  })
})
