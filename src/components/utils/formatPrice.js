export function FormatPrice (props) {
  const { price } = props
  const toNumber = parseFloat(price, 10)
  let finalPrice = toNumber.toFixed(2)
  if (finalPrice > 1000000000 && finalPrice <= 1000000000000000) finalPrice = `${(finalPrice/1000000000).toFixed(2)}b`
  if (finalPrice > 1000000000000000) finalPrice = `${(finalPrice/1000000000000000).toFixed(2)}t`
  if (finalPrice > 1000000 && finalPrice <= 1000000000) finalPrice = `${(finalPrice/1000000).toFixed(2)}m`
  return `$${finalPrice}`
}
