import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { RightsService } from './rights.service';

@Controller('rights')
export class RightsController {
  constructor(private readonly rightsService: RightsService) {}

  @Post('register')
  async register(@Body() data) {
    if (!data.username || !data.password) {
      throw new BadRequestException();
      return;
    }

    const ret = await this.rightsService.register(data);
    return {
      code: 0,
      data: ret,
    };
  }

  @Post('login')
  async login(@Body() data) {
    if (!data.username || !data.password) {
      throw new BadRequestException();
      return;
    }

    const ret = await this.rightsService.login(data);
    return {
      code: 0,
      data: {
        access_token: ret,
      },
    };
  }
}
