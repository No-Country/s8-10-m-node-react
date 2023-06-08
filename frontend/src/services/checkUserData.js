export async function checkUserData (userEmail) {
  try {
    const data = await fetch(`https://dominoback.onrender.com/api/user/${userEmail}`)
    const json = await data.json()
    return json
  } catch (error) {
    console.error(error)
  }
}