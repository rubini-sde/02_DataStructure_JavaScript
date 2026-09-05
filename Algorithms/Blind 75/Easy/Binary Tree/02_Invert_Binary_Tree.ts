interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function invertBinaryTree(
  root: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  const rightNode = invertBinaryTree(root.right);
  const leftNode = invertBinaryTree(root.left);

  root.left = rightNode;
  root.right = leftNode;

  return root;
}

// Time complexity - O(n)
// Space complexity - O(h) - recursion stack depends on tree height
