import {
  Query,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { CitService } from './cit.service';

@Controller('cit')
export class CitController {
  constructor(private readonly citService: CitService) {}

  @Get('tree')
  async getTree() {
    const data = await this.citService.getTree();
    return {
      code: 0,
      data,
    };
  }
}
