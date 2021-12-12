const faker = require('faker');
import { Injectable } from '@nestjs/common';

@Injectable()
export class DB {
  private readonly id: string;
  private readonly createTime: number;
  updateTime: number;
  constructor() {
    this.id = faker.datatype.uuid();
    this.createTime = Date.now();
    this.updateTime = Date.now();
  }
}
