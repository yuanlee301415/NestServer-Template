import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { TransformIntQuery } from '../common/transform/query.transform';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(@Query(new TransformIntQuery()) query) {
    const data = await this.userService.findAll(query);
    return {
      code: 0,
      data: data,
      total: data?.length,
    };
  }

  @Get(':id')
  async getUser(@Param('id') id) {
    const user = await this.userService.findOneByUserId(id);
    return {
      code: 0,
      data: user,
    };
  }
}
