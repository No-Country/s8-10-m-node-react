const BASE_URL = 'https://pagaya.onrender.com/api'

export async function getCreditCardInfo (id) {
  try {
    const res = await fetch(`${BASE_URL}/card`, {
      method: 'GET'
    })
    const json = await res.json()
    const data = json.response
    const card = data.filter(card => card.cardNumber === id)
    return card[0]
  } catch (error) {
    console.error(error)
  }
}