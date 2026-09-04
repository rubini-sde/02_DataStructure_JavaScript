interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function countNodes(node: TreeNode | null): number {
  if (node === null) return 0;

  const leftCount = countNodes(node.left);

  const rightCount = countNodes(node.right);

  return 1 + leftCount + rightCount;
}
