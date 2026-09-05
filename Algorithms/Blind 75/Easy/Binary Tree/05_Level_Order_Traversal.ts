interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function levelOrderTraversal(root: TreeNode | null): number[][] {
  const levels: number[][] = [];

  if (root === null) return levels;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    const level: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levels.push(level);
  }

  return levels;
}

// Time complexity - O(n)
// Space complexity - O(m) - m is the max number of nodes at any level
