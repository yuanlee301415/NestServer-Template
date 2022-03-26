import { Injectable } from '@nestjs/common';
import { mockTreeData } from './TreeNode';

@Injectable()
export class CitService {
  async getTree() {
    return mockTreeData(10, 2);
  }
}
