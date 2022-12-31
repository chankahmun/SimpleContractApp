
const execute = async (url, postMethod = 'GET', postBody = {}) => {
  return await fetch(url, {
    method: postMethod,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: postMethod === 'POST' ? postBody : null
    });
};

const getResponse = async(response) => await response.json();

const getData = async(data) => await data;
  
  
  export default {
    get: (path, options) => execute(path, 'GET', options).then(getResponse).then(getData),
    post: (path, options) => execute(path, 'POST', options).then(getResponse).then(getData),
  };