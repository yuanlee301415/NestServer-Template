import { DB } from '../common/db';

export default class CI extends DB {
  name: string;
  displayName: string;
  description: string;
  bizType: string;
  constructor(ci) {
    super();
    this.name = ci.name;
    this.displayName = ci.displayName;
    this.description = ci.description;
    this.bizType = ci.bizType;
  }
}
