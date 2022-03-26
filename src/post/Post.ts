const faker = require('faker/locale/zh_CN');

let _id = 1000;

export function patchId() {
  return ++_id;
}

export default class Post {
  __INDEX__: number;
  _id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(post) {
    this.__INDEX__ = patchId();
    this._id = String(this.__INDEX__);
    this.title = post.title;
    this.desc = post.desc;
    this.content = post.content;
    this.createdAt = post.createdAt || new Date();
    this.updatedAt = null;
  }
}

export const Posts = (function (total) {
  const data = new Array(total);
  for (let i = 0; i < total; i++) {
    data[i] = new Post({
      title: faker.lorem.sentence(),
      desc: faker.lorem.sentences(),
      content: faker.lorem.paragraphs(20),
    });
  }
  return data;
})(60);
