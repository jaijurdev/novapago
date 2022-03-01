function FormatPercent (props) {
  const { price } = props
  const finalPercent = parseFloat(price).toFixed(2)
  return `${finalPercent} %`
}

export default FormatPercent
