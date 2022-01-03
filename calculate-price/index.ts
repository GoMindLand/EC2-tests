export interface Article {
  price: string
  tva: string
}
function getMoney(totalPrice: string = "0") {
  return totalPrice.substring(0, totalPrice.length - 1)
}
function convertToNumber(priceWithCurrency: string) {
  return Number(getMoney(priceWithCurrency))
}
export function calculatePrice(article: Article[]) {
  const currency = "€"
  let totalPriceHT: number = 0
  let totalPriceTTC: number = 0

  for (const item of article) {
    totalPriceHT += convertToNumber(item?.price)
    const tva = convertToNumber(item?.tva)
    totalPriceTTC += convertToNumber(item?.price) * (1 + tva / 100)
  }
  return {
    totalPriceHT: totalPriceHT.toFixed(2) + currency,
    totalPriceTTC: totalPriceTTC.toFixed(2) + currency,
  }
}
