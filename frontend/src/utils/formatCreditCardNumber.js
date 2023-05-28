export function formatCreditCardNumber (number) {
  const parts = number.match(/[\s\S]{1,4}/g)
  return parts.join(' ● ')
}
