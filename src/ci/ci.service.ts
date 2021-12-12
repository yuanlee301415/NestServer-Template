import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import CI from './CI';

const db = new JsonDB(new Config('./db/ci', true, true));

@Injectable()
export class CIService {
  async create(data) {
    const ret = new CI({
      name: data.name,
      displayName: data.displayName,
      description: data.description,
      bizType: data.bizType,
    });
    db.push('/ci[]', ret);
    return ret;
  }

  async findAll({ page, size }) {
    const all = db.getData('/ci');
    const total = db.count('/ci');
    const ret = all
      .sort((a, b) => b.updateTime - a.updateTime)
      .slice((page - 1) * size, page * size);
    return [ret.length ? ret : null, total];
  }

  async findById(id) {
    const idx = db.getIndex('/ci', id);
    if (idx === -1) return null;
    return db.getData(`/ci[${idx}]`);
  }

  async updateById(id, data) {
    const idx = db.getIndex('/ci', id);
    if (idx === -1) return null;

    const ex = db.getData(`/ci[${idx}]`);
    const ret = Object.assign(ex, data, { updateTime: Date.now() });
    db.push(`/ci[${idx}]`, ret);
    return ret;
  }

  async delete(ids) {
    const ret = [];
    ids.forEach((id) => {
      const idx = db.getIndex('/ci', id);
      if (idx === -1) return;
      db.delete(`/ci[${idx}]`);
      ret.push(id);
    });
    return ret.length ? ret : null;
  }
}
