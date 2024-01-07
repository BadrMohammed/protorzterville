const convertObjToQueryString = (obj: any) => {
  let params = '?';

  Object.entries(obj).map((item: any, i: any) => {
    if (i !== 0) {
      params += '&';
    }

    params += `${item[0]}=${item[1]}`;
  });

  return params;
};

export default convertObjToQueryString;
