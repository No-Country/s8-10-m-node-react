const BASE_URL = 'https://dominoback.onrender.com/api/associateCards'

export async function associateCard (cardNumber, cvv, type, titular, accountNumber) {
  const data = {
    cardNumber,
    cvv,
    issuingEntity: 'VISA',
    type,
    cardholder: titular,
    accountNumber
  }

  const reqOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    const res = await fetch(BASE_URL, reqOptions)
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
  }
}