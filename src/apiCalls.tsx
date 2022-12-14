const getData = (url: string) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error("HTTP error " + response.status);
    } else {
      return response.json();
    }
  });
};

export default getData;
