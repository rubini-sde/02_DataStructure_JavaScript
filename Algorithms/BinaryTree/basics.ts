/*
| Term        | Meaning                          |
| ----------- | -------------------------------- |
| **Node**    | An individual element            |
| **Root**    | Top node                         |
| **Parent**  | Node above another node          |
| **Child**   | Node below another node          |
| **Leaf**    | Node with no children            |
| **Subtree** | Tree rooted at a particular node |
| **Depth**   | Distance from root               |
| **Height**  | Longest distance down to a leaf  |
| **Level**   | Position/layer in the tree       |
*/


class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);

// DEPTH FIRST SEARCH

// Preorder = Current → Left → Right
function dfsPreOrder(node: TreeNode | null) {
  if (node === null) return;

  console.log(node.value);
  dfsPreOrder(node.left);
  dfsPreOrder(node.right);
}

// Inorder = Left → Current → Right
function dfsInOrder(node: TreeNode | null) {
  if (node === null) return;
  dfsInOrder(node.left);
  console.log(node.value);
  dfsInOrder(node.right);
}

// Post order = Left → Right → Current
function dfsPostOrder(node: TreeNode | null) {
  if (node === null) return;
  dfsPostOrder(node.left);
  dfsPostOrder(node.right);
  console.log(node.value);
}

// BREADTH FIRST SEARCH
// prints -> [1,2,3,4,5,6,7]

function bfs(root: TreeNode | null) {
  if (root === null) return;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    console.log(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
}

// // Level Order
// prints -> [[1], [2, 3], [4, 5, 6, 7]];

function bfsLevelOrder(root: TreeNode | null) {
  if (root === null) return;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      console.log(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}
