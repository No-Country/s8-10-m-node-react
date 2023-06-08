const BASE_URL = 'https://dominoback.onrender.com/api/business'

export async function payService (emitter, amount, subject) {
  const data = {
    'typeTransaction': 'PAY',
    'emitter': emitter,
    'amountQuantity': Number(amount),
    'subject': subject
  }

  const reqOptions = {
    method: 'POST',
    body: data
  }

  try {
    const res = await fetch(BASE_URL, reqOptions)
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
  }
}