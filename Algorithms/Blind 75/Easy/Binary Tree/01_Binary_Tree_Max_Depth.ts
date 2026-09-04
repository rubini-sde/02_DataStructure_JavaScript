interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function maxDepth(node: TreeNode | null): number {
  if (node === null) return 0;

  const leftMaxDepth = maxDepth(node.left);

  const rightMaxDepth = maxDepth(node.right);

  return 1 + Math.max(leftMaxDepth, rightMaxDepth);
}

// Time complexity - O(n)
// Space Complexity - O(h) -> height of the node

// Recursive space depends on how deep the recursion goes, not on how many total nodes exist.
// skewed tree (has only left tree or right tree) - recursive space complexity is same as number of nodes - O(n)
// balanced tree - O(log n)
