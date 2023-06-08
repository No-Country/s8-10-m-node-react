export async function checkUserData () {
  try {

    const data = await fetch('https://dominoback.onrender.com/api/business/542116943394048')
    const json = await data.json()
    return json
  } catch (error) {
    console.error(error)
  }
}