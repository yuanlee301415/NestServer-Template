import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CryptoUtil } from '../common/utils/crypto.util';

@Injectable()
export class RightsService {
  constructor(
    private readonly userService: UserService,
    @Inject(CryptoUtil) private readonly cryptoUtil: CryptoUtil,
  ) {}

  async register(data) {
    const user = await this.userService.create(data);
    return user._id;
  }

  async login(data) {
    const user = await this.userService.findOneByUsername(data);
    if (!user) throw new UnauthorizedException();

    return this.cryptoUtil.encryptPassword(String(Date.now() * Math.random()));
  }
}
