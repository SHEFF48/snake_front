const BASE_URL = "http://109.199.116.132:3000/"

/*------------------------------------------------------------------------------*/

const postData = async (request: string, data: any) => {
  try {
    // const formattedRequest = request.endsWith("/") ? request : `${request}/`
    const formatedData = JSON.stringify(data)
    const response = await fetch(`${BASE_URL}${request}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formatedData,
    })

    const result = response.ok && (await response.json())

    return result
  } catch (error) {
    console.error("Error fetching:", error)
    return null
  }
}

/*------------------------------------------------------------------------------*/

export async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined")
  }

  const res = await fetch(`${BASE_URL}${API_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  const data = await res.json()

  return data
}

export const getTopResults = async () => {
  const endpoint = "top-results"

  const res = await getData(`${endpoint}`)
  return res
}

/*------------------------------------------------------------------------------*/

export const postPlayerResult = async (playerResult: {
  playerName: string
  score: number
}) => {
  const response = await postData("add-result", playerResult)
  return response
}
