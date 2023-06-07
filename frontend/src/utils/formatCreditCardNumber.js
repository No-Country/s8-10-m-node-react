export function formatCreditCardNumber(number) {
  if (typeof number !== 'string') {
    return ''
  }

  const parts = number.match(/[0-9]{1,4}/g)
  if (parts) {
    return parts.join(' ')
  }
  return ''
}
