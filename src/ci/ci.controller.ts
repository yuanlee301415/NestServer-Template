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
import { CIService } from './ci.service';

@Controller('ci')
export class CIController {
  constructor(private readonly ciService: CIService) {}

  @Post()
  async create(@Body() body) {
    const data = await this.ciService.create(body);
    return {
      code: 0,
      data,
    };
  }

  @Get()
  async getAll(@Query() query) {
    const [data, total] = await this.ciService.findAll(query);
    return {
      code: 0,
      data,
      total,
    };
  }

  @Get(':id')
  async get(@Param('id') id) {
    const data = await this.ciService.findById(id);
    return {
      code: 0,
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body) {
    const data = await this.ciService.updateById(id, body);
    return {
      code: 0,
      data,
    };
  }

  @Delete()
  async delete(@Body('ids') ids) {
    const data = await this.ciService.delete(ids);
    return {
      code: 0,
      data,
    };
  }
}
