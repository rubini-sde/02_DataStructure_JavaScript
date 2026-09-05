interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  return isMirror(root.left, root.right);

  function isMirror(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;

    return (
      a.val === b.val && isMirror(a.left, b.right) && isMirror(a.right, b.left)
    );
  }
}

// TIme complexity - O(n)
// Space complexity - O(h)
