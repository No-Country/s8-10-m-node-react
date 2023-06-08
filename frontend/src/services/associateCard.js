const BASE_URL = 'https://dominoback.onrender.com/api/associateCards'

export async function associateCard (cardNumber, cvv, type, titular, accountNumber) {
  const data = {
    'cardNumber': cardNumber,
    'cvv': cvv,
    'issuingEntity': 'VISA',
    'type': type,
    'cardholder': titular,
    'accountNumber': accountNumber
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
    return res
  } catch (error) {
    console.error(error)
  }
}