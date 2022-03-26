import { createHash } from 'crypto';

let _id = 1000;

export function patchId() {
  return ++_id;
}

export default class User {
  __INDEX__: number;
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(user) {
    this.__INDEX__ = patchId();
    this._id = String(this.__INDEX__);
    this.username = user.username;
    this.password = user.password;
    this.createdAt = user.createdAt || new Date();
    this.updatedAt = null;
  }
}

export const Users = [
  new User({
    username: 'root',
    password: createHash('sha256').update('123456').digest('hex'),
  }),
  new User({
    username: 'admin',
    password: createHash('sha256').update('123456').digest('hex'),
  }),
  new User({
    username: 'user',
    password: createHash('sha256').update('123456').digest('hex'),
  }),
  new User({
    username: 'normal',
    password: createHash('sha256').update('123456').digest('hex'),
  }),
];
