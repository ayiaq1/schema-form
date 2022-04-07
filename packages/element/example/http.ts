// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
// Example POST method implementation:
async function http(url = '', data = {}, method) {
  // Default options are marked with *
  const response = await fetch(url, {
    method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export const get = async (url: any, data?: any) => {
  const response = await http(url, data, 'GET');
  return response.respData;
};
