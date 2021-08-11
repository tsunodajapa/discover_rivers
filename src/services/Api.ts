import axios, { AxiosInstance } from 'axios';

export class Api {
  protected client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.baseUrl,
    });
  }
}
