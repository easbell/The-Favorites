export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const parsedData = response.json()
    return parsedData;
  } catch(error) {
    return error.message
  }
}