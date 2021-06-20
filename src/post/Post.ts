const faker = require('faker/locale/zh_CN')

let _id = 10000;

export default class Post {
  _id: string;
  title: string;
  desc: string;
  content: string;
  createdAt: Date;
  constructor(post) {
    this._id = String(_id++);
    this.title = post.title;
    this.desc = post.desc;
    this.content = post.content;
    this.createdAt = post.createdAt || new Date();
  }
}

export const Posts = (function(total) {
  const data = new Array(total)
  for (let i = 0; i < total; i++) {
    data[i] = new Post({
      title: faker.lorem.sentence(),
      desc: faker.lorem.sentences(),
      content: faker.lorem.paragraphs(20),
    })
  }
  return data;
})(60)
