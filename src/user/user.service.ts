import { Injectable, Inject } from '@nestjs/common';
import { CryptoUtil } from '../common/utils/crypto.util';
import User, { users } from './User';

@Injectable()
export class UserService {
  constructor(@Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil) {}

  async create(user) {
    const newUser = new User(user);
    users.push(newUser);
    return newUser;
  }

  async findAll() {
    return users;
  }
}
