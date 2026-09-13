// Given an object that resembles a DOM tree, implement a function that serializes the object into a
// formatted string with proper indentation (one tab (\t character) per nesting level) and one tag per line.

export default function htmlSerializer(root) {
  function traverse(node, depth = 0) {
    const indentation = "\t".repeat(depth);
    if (typeof node === "string") {
      return `${indentation}${node}`;
    }
    return [
      `${indentation}<${node.tag.toLowerCase()}>`,
      ...node.chilren.map((child) =>
        traverse(child, depth + 1)
      )`${indentation}</${node.tag.toLowerCase()}>`,
    ].join("\n");
  }

  return traverse(root);
}
