import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { users } from './User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return {
      code: 0,
      data: users,
      total: users.length,
    };
  }

  @Get(':id')
  async getUser(@Param('id') id) {
    const user = users.find((_) => _._id === id);
    return {
      code: 0,
      data: user,
    };
  }
}
