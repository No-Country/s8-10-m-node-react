const BASE_URL = 'https://pagaya.onrender.com/api'

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
    return response.json()
  } catch (error) {
    return error
  }
}
