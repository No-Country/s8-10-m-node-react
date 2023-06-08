const BASE_URL = 'https://pagaya.onrender.com/api'

export async function getCreditCardInfo (id) {
  try {
    const res = await fetch(`${BASE_URL}/associateCards`, {
      method: 'GET'
    })
    const json = await res.json()
    const data = json.response
    return (data)
    return data
  } catch (error) {
    console.error(error)
  }
}