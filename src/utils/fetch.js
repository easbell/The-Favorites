export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  if(response.ok) {
    const parsedData = await response.json()
    return parsedData;
  } else {
    throw Error(response.statusText)
  }
}