const baseURL = 'https://api.soundstripe.com/v1';

const config = {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Accept': 'application/vnd.api+json'
  }
};


export const http = (url) => {
  return fetch(`${baseURL}${url}`, config)
    .then(response => {
      if (!response.ok) {
        throw Error("Network request failed.")
      }
       return response.json();
    })
    .then(d => {
      return d
    })
    .catch(err => {
      console.error(err);
      return err
    })
};