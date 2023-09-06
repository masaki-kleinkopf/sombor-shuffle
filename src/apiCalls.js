const getData = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw Error("HTTP error " + response.status);
  } else {
    return response.json();
  }
};

export default getData;
