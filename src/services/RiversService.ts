import { Api } from './Api';

export interface River {
  title: string;
  description: string;
  length: string;
  countries: string[];
  continent: string;
  image: string;
  dir: string;
  path: string;
  slug: string;
  updatedAt: string;
}

export class RiversService extends Api {
  protected path: string;

  constructor() {
    super();
    this.path = 'rivers';
  }

  async index(): Promise<River[]> {
    return (await this.client.get(this.path)).data;
  }
}
