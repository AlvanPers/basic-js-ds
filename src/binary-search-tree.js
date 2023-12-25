const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }

  root() {
    return this.rootEl;
  }

  add(data) {
    this.rootEl = addData(this.rootEl, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.rootEl, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return findData(this.rootEl, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootEl = removeData(this.rootEl, data);
    function removeData(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minimumRight = node.right;
        while (minimumRight.left) {

          minimumRight = minimumRight.left;
        }
        node.data = minimumRight.data;

        node.right = removeData(node.right, minimumRight.data);

        return node;
      }
    }
  }

  min() {

    if (!this.rootEl) {
      return null;
    }

    let node = this.rootEl;

    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {

    if (!this.rootEl) {
      return null;
    }

    let node = this.rootEl;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};