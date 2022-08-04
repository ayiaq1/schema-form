const request = (url: string, options?: any) => {
  return new Promise<any>((resolve) => {
    fetch(url, {
      credentials: 'include',
      mode: 'cors',
      ...options,
    }).then((response) => {
      if (response.status === 200) {
        return resolve(response.json());
      } else {
        throw new Error('Something went wrong on api server!');
      }
    });
  });
};

export const get = async (url: any, params?: any) => {
  const response = await request(url, {
    ...params,
    method: 'GET',
  });
  return response.respData;
};

export const post = async (url: any, params?: any) => {
  const response = await request(url, {
    ...params,
    method: 'POST',
  });
  return response.respData;
};
