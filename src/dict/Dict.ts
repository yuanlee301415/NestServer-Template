import { DB } from '../common/db';

export default class Dict extends DB {
  name: string;
  displayName: string;
  description: string;
  items: Record<string, string>;
  constructor(dict) {
    super();
    this.name = dict.name;
    this.displayName = dict.displayName;
    this.description = dict.description;
    this.items = dict.items;
  }
}
