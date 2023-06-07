export function detectCardType (number) {
  return number[0] > 4 ? 'variant1' : 'variant2'
}
