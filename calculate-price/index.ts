export type Article = {
  totalPriceHT: string
  totalPriceTTC: string
}

export function calculatePrice(article: Article[]): Article {
  return {
    totalPriceHT: "0.00€",
    totalPriceTTC: "0.00€",
  }
}
