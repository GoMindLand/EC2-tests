import { Article, calculatePrice } from "./calculatePrice";

describe("Calculate price", () => {
  test.each([
    {
      articles: [],
      expectedTotalPriceHT: "0.00€",
      expectedTotalPriceTTC: "0.00€",
    },
    {
      articles: [{ price: "1.21€", tva: "0%" }],
      expectedTotalPriceHT: "1.21€",
      expectedTotalPriceTTC: "1.21€",
    },
    {
      articles: [
        { price: "1.21€", tva: "0%" },
        { price: "1.21€", tva: "0%" },
      ],
      expectedTotalPriceHT: "2.42€",
      expectedTotalPriceTTC: "2.42€",
    },
    {
      articles: [
        { price: "1.21€", tva: "5%" },
        { price: "1.21€", tva: "5%" },
        { price: "1.21€", tva: "5%" },
      ],
      expectedTotalPriceHT: "3.63€",
      expectedTotalPriceTTC: "3.81€",
    },
  ])(
    "should calculate prices articles with $expectedTotalPriceHT HT and $expectedTotalPriceTTC TTC",
    async (cases) => {
      const { articles, expectedTotalPriceHT, expectedTotalPriceTTC } = cases;

      const result = calculatePrice(articles);

      expect(result).toStrictEqual({
        totalPriceHT: expectedTotalPriceHT,
        totalPriceTTC: expectedTotalPriceTTC,
      });
    }
  );
});
