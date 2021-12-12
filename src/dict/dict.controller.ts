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
import { DictService } from './dict.service';

@Controller('dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}

  @Post()
  async create(@Body() body) {
    const data = await this.dictService.create(body);
    return {
      code: 0,
      data,
    };
  }

  @Get()
  async getAll(@Query() query) {
    const [data, total] = await this.dictService.findAll(query);
    return {
      code: 0,
      data,
      total,
    };
  }

  @Get(':id')
  async get(@Param('id') id) {
    const data = await this.dictService.findById(id);
    return {
      code: 0,
      data,
    };
  }

  @Put(':id')
  async update(@Param('id') id, @Body() body) {
    const data = await this.dictService.updateById(id, body);
    return {
      code: 0,
      data,
    };
  }

  @Delete()
  async delete(@Body('ids') ids) {
    const data = await this.dictService.delete(ids);
    return {
      code: 0,
      data,
    };
  }
}
