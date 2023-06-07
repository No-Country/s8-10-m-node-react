const BASE_URL = 'https://dominoback.onrender.com/api'

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}
