import axios from 'axios';

const REACT_APP_TARGET_API = '/api';

const REACT_APP_TARGET_MACHINE = `${process.env.REACT_APP_TARGET_MACHINE || window.location.origin}`;

var http = axios.create({
  baseURL: REACT_APP_TARGET_MACHINE
});

interface QueryObject {
  [key: string]: any;
}

export default class Api {
  static resolveAddress(endpoint: string) {
    return `${REACT_APP_TARGET_API}${endpoint}`;
  }

  static get<T>(endpoint: string, query?: QueryObject): Promise<T> {
    // tslint:disable-next-line:no-console
    console.log('GET: ', endpoint);
    return new Promise<T>((resolve, reject) => {
      http
        .get(this.resolveAddress(endpoint), {
          params: query
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(reject);
    });
  }
}
