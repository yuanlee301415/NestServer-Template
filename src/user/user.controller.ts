import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    const data = await this.userService.findAll();
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
