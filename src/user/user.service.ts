import { Injectable, Inject } from '@nestjs/common';
import { CryptoUtil } from '../common/utils/crypto.util';
import User, { users } from './User';

@Injectable()
export class UserService {
  constructor(@Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil) {}

  async create(user) {
    const newUser = new User({
      username: user.username,
      password: this.cryptoUtil.encryptPassword(user.password),
    });
    users.push(newUser);
    return newUser;
  }

  async findAll() {
    return users;
  }

  async findOneByUsername({ username, password }) {
    const ret = users.find(
      (_) =>
        _.username === username &&
        _.password === this.cryptoUtil.encryptPassword(password),
    );
    return ret;
  }

  async findOneByUserId(id) {
    const ret = users.find((_) => _._id === id);
    return ret;
  }
}
