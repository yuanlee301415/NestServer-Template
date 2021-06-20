import { Injectable, Inject } from '@nestjs/common';
import { CryptoUtil } from '../common/utils/crypto.util';
import User, { Users } from './User';

@Injectable()
export class UserService {
  constructor(@Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil) {}

  async create(user) {
    const newUser = new User({
      username: user.username,
      password: this.cryptoUtil.encryptPassword(user.password),
    });
    Users.push(newUser);
    return newUser;
  }

  async findAll({ page, size }) {
    Users.sort((a, b) => a.__INDEX__ < b.__INDEX__ ? 1 : -1)
    return [Users.slice(size * (page - 1), size * page), Users.length];
  }

  async validateUser({ username, password }) {
    const ret = Users.find(
      (_) =>
        _.username === username &&
        _.password === this.cryptoUtil.encryptPassword(password),
    );
    return ret;
  }

  async findOneByUserId(id) {
    const ret = Users.find((_) => _._id === id);
    return ret;
  }
}
