export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  if(response.ok) {
    const parsedData = response.json()
    return parsedData;
  } else {
    return 'error'
  }
} 