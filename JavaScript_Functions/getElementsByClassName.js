// Step 1: split the input className string into any array of target classNames
// Step 2: Traverse through element.children
// Step 3: Iterate through target classnames using every > if all classnames are present in an element
// Step 4: push it to results

export default function getElementsByClassName(element, className) {
  const result = [];

  const targetClasses = className.trim().split(/\s+/);

  function traverse(el) {
    if (
      targetClasses.every((cls) => {
        return el.classList.contains(cls);
      })
    ) {
      result.push(el);
    }

    for (const child of el.children) traverse(child);
  }

  for (const child of element.children) traverse(child);

  return result;
}
