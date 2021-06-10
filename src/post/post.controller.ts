import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('')
  async create(@Body() data) {
    if (!data.title || !data.content) {
      throw new BadRequestException();
      return;
    }

    const ret = await this.postService.create(data);
    console.log('newPost:', ret);
    return {
      code: 0,
      data: ret,
    };
  }

  @Get()
  async getAll() {
    const data = await this.postService.findAll();
    return {
      code: 0,
      data: data,
      total: data?.length,
    };
  }

  @Get(':id')
  async getPost(@Param('id') id) {
    const post = await this.postService.findOneByPostId(id);
    return {
      code: 0,
      data: post,
    };
  }

  @Put(':id')
  async putPost(@Param('id') id, @Body() data) {
    if (!id) {
      throw new BadRequestException();
      return;
    }

    const ret = await this.postService.update(id, data);
    return {
      code: 0,
      data: ret,
    };
  }

  @Delete(':id')
  async removePost(@Param('id') id) {
    if (!id) {
      throw new BadRequestException();
      return;
    }

    const ret = await this.postService.remove(id);
    return {
      code: 0,
      data: ret,
    };
  }
}
