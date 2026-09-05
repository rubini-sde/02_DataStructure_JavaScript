interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function isBTEqual(
  a: TreeNode | null,
  b: TreeNode | null
): boolean {
  // both null
  if (a === null && b === null) return true;

  // one null
  if (a === null || b === null) return false;

  // compare value
  if (
    a.value === b.value &&
    isBTEqual(a.left, b.left) &&
    isBTEqual(a.right, b.right)
  )
    return true;

  return false;
}
