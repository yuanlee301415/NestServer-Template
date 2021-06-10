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

  async findAll() {
    return Users;
  }

  async findOneByUsername({ username, password }) {
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
