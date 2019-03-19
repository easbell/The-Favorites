export const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const parsedData = response.json()
    return parsedData;
  } catch(error) {
    return error.message
  }
}