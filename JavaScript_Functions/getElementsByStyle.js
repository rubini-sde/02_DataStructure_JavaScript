// Step 1: Traverse through element.children
// Step 2: If the element has the property : value inside style > push it to results
// Step 3: Conitnue traversing

export default function getElementsByStyle(element, property, value) {
  const result = [];

  function traverse(el) {
    if (el.style[property] === value) {
      result.push(el);
    }
    for (const child of el.children) traverse(child);
  }

  for (const child of element.children) traverse(child);

  return result;
}
