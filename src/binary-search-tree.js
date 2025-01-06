const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    console.log(this._root);
    return this._root
  }

  add(data) {
    const newNode = { data, left: null, right: null };

    if (!this._root) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }

    // console.log(this._root);
  }



  has(data) {
    return !!this.find(data);

  }

  find(data) {
    // console.log(data);
    return this._findNode(this._root, data);
  }

  _findNode(node, data) {
    if (!node) return null;

    if (data === node.data) return node;

    if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data)
  }
  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;


      const minRight = this._findMin(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (!this._root) return null;

    const minNode = this._findMin(this._root);
    return minNode.data;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  max() {
    if (!this._root) return null;

    const maxNode = this._findMax(this._root);
    return maxNode.data;
  }

  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}
const tree = new BinarySearchTree();
// console.log(tree.root());
// console.log(tree.add(10));
// console.log(tree.add(11));
// // console.log(tree.has(11));
// // console.log(tree.has(12));
// // console.log(tree.has(11));
// console.log(tree.has(10));
tree.root()
tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5)
// console.log(tree.find(5));
tree.root()
tree.remove(2);
console.log(tree.min());
console.log(tree.max());
tree.root()

module.exports = {
  BinarySearchTree
};