export default class TreeNode {
  name: string;
  displayName: string;
  parentName: string;
  path: string;
  idx: number;
  children?: TreeNode[];
  constructor(_: TreeNode) {
    this.name = _.name;
    this.displayName = _.displayName;
    this.parentName = _.parentName;
    this.path = _.path;
    this.children = _.children;
    this.idx = _.idx;
  }
}

export function mockTreeData(childrenLength = 1, level = 1): TreeNode[] {
  let count = 0;
  const root = new TreeNode({
    name: 'root',
    displayName: '根节点',
    parentName: '',
    path: 'root',
    children: [],
    idx: count,
  });

  function recursive(
    parentName: string,
    path: string,
    key = 'Node',
    _level = 0,
  ) {
    const list = new Array();
    for (let i = 0; i < childrenLength; i++) {
      const name = `${key}-${i}`;
      const node = new TreeNode({
        idx: ++count,
        name,
        parentName,
        path: [path, name].join('.'),
        displayName:
          `${count}.` + name + `(${parentName})` + `[${path}.${name}]`,
      });

      if (_level < level) {
        node.children = recursive(node.name, node.path, node.name, ++_level);
        --_level;
      }

      list.push(node);
    }
    return list;
  }

  root.children = recursive(root.name, root.path);
  console.warn('treeNode > count:', count);
  return [root];
}
