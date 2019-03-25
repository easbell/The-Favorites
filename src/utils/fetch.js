export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  console.log(response)
  if(response.ok) {
    const parsedData = response.json()
    return parsedData;
  } else {
    return response
  }
}