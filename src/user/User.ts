import { createHash } from 'crypto';

let _id = 10000;

export default class User {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  constructor(user) {
    this._id = createHash('sha256')
      .update(String(_id++))
      .digest('hex');
    this.username = user.username;
    this.password = user.password;
    this.createdAt = new Date();
  }
}

export const users = [
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
