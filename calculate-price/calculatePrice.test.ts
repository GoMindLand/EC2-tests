import { Article, calculatePrice } from "."

describe("Calculate price", () => {
  test("should calculate the price when we have no article", () => {
    // Arrange
    let articles: Array<Article> = []

    // act
    const result = calculatePrice(articles)

    // Assert
    expect(result).toStrictEqual({
      totalPriceHT: "0.00€",
      totalPriceTTC: "0.00€",
    })
  })
})
