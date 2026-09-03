// Given a string str consisting of characters such as '(', ')', '{', '}', '[' and ']', determine if the input string is properly balanced.

// A string is considered balanced if:

// Each opening bracket is closed by the same type of bracket (e.g., ( with ), { with }, and [ with ])
// Open brackets are closed in the correct order (e.g., ([]) is valid, but ([)] is not)
// Any subset of brackets enclosed within a matched pair must also form a valid matched pair (e.g., {[(])} is not balanced because the contents inside { and } are unbalanced).
// Input
// str: string: A string

export default function balancedBrackets(input: string): boolean {
  const stack: string[] = [];

  const map = new Map<string, string>();
  map.set("{", "}");
  map.set("[", "]");
  map.set("(", ")");

  for (let char of input) {
    // opening bracket
    if (map.has(char)) {
      stack.push(map.get(char)!);
    } else if (char !== stack.pop()) {
      // closing bracket
      return false;
    }
  }

  return stack.length === 0;
}

// Time COmplexity - O(n)
// Space complexity - O(n)