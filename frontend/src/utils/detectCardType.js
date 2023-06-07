export function detectCardType (number) {
  const cleanedNumber = number.replace(/\D/g, '')
  return cleanedNumber[0] > 4 ? 'variant1' : 'variant2'
}
