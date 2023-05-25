export function detectCardType (number) {
  const cleanedNumber = number.replace(/\D/g, '')

  const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    masterCard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/
  }

  for (const cardType in cardPatterns) {
    if (cardPatterns[cardType].test(cleanedNumber)) {
      return cardType
    }
  }
  return 'nocard'
}
