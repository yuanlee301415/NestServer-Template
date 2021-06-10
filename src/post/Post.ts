import { createHash } from 'crypto';

let _id = 10000;

export default class Post {
  _id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
  constructor(post) {
    this._id = createHash('sha256')
      .update(String(_id++))
      .digest('hex');
    this.title = post.title;
    this.desc = post.desc;
    this.content = post.content;
    this.createdAt = post.createdAt || new Date();
  }
}

export const Posts = [
  new Post({
    title: `Post-title-${_id++}`,
    desc: `Post-desc-${_id++}`,
    content: `Post-content-${_id++}`,
  }),
  new Post({
    title: `Post-title-${_id++}`,
    desc: `Post-desc-${_id++}`,
    content: `Post-content-${_id++}`,
  }),
  new Post({
    title: `Post-title-${_id++}`,
    desc: `Post-desc-${_id++}`,
    content: `Post-content-${_id++}`,
  }),
];
