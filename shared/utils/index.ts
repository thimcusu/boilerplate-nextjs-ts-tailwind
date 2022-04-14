import queryString from 'query-string';

function camelToSnake(value: string) {
  return value.replace(/[\w]([A-Z])/g, m => `${m[0]}_${m[1]}`).toLowerCase();
}

function stringifyParams(data: any) {
  const { params, option } = data;
  return queryString.stringify(params, {
    arrayFormat: 'comma',
    encode: false,
    skipNull: true,
    skipEmptyString: true,
    ...option,
  });
}

function getCurrentDomain() {
  if(typeof window !== 'undefined') {
    const parts = window?.location.hostname.split('.');
    parts.shift();
    return parts.join('.');
  }
  return '';
}

function getUrlRoot(pathname?: string) {
  return pathname ? pathname.split('/')[1] : '';
}

export { stringifyParams, camelToSnake, getCurrentDomain, getUrlRoot };
