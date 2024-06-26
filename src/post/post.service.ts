import { Injectable } from '@nestjs/common';
import Post, { Posts, patchId } from './Post';

@Injectable()
export class PostService {
  async create(post) {
    const newPost = new Post({
      title: post.title,
      desc: post.desc,
      content: post.content,
    });
    Posts.push(newPost);
    return newPost;
  }

  async findAll({ page, size }) {
    Posts.sort((a, b) => (a.__INDEX__ < b.__INDEX__ ? 1 : -1));
    return [Posts.slice(size * (page - 1), size * page), Posts.length];
  }

  async findOneByPostId(id) {
    const ret = Posts.find((_) => _._id === id);
    return ret;
  }

  async update(id, data) {
    const post = await this.findOneByPostId(id);
    if (!post) return null;

    const { title, desc, content } = data;
    Object.assign(post, {
      title,
      desc,
      content,
      updatedAt: new Date(),
      __INDEX__: patchId(),
    });
    return id;
  }

  async remove(id) {
    const idx = Posts.findIndex((_) => _._id === id);
    if (idx === -1) return;

    return Posts.splice(idx, 1);
  }
}
