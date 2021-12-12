import { Injectable } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import Dict from './Dict';

const db = new JsonDB(new Config('./db/dict', true, true));

@Injectable()
export class DictService {
  async create(data) {
    const ret = new Dict({
      name: data.name,
      displayName: data.displayName,
      description: data.description,
      items: data.items,
    });
    db.push('/dict[]', ret);
    return ret;
  }

  async findAll({ page, size }) {
    const all = db.getData('/dict');
    const total = db.count('/dict');
    const ret = all
      .sort((a, b) => b.updateTime - a.updateTime)
      .slice((page - 1) * size, page * size);
    return [ret.length ? ret : null, total];
  }

  async findById(id) {
    const idx = db.getIndex('/dict', id);
    if (idx === -1) return null;
    return db.getData(`/dict[${idx}]`);
  }

  async updateById(id, data) {
    const idx = db.getIndex('/dict', id);
    if (idx === -1) return null;

    const ex = db.getData(`/dict[${idx}]`);
    const ret = Object.assign(ex, data, { updateTime: Date.now() });
    db.push(`/dict[${idx}]`, ret);
    return ret;
  }

  async delete(ids) {
    const ret = [];
    ids.forEach((id) => {
      const idx = db.getIndex('/dict', id);
      if (idx === -1) return;
      db.delete(`/dict[${idx}]`);
      ret.push(id);
    });
    return ret.length ? ret : null;
  }
}
