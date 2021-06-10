let _id = 10000;

export default class User {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  constructor(user) {
    this._id = String(_id++);
    this.username = user.username;
    this.password = user.password;
    this.createdAt = new Date();
  }
}

export const users = [
  new User({ username: 'root', password: '***' }),
  new User({ username: 'admin', password: '***' }),
  new User({ username: 'user', password: '***' }),
  new User({ username: 'normal', password: '***' }),
];
