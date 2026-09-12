interface CounterValue {
  get: () => number;
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

class Counter implements CounterValue {
  initialValue: number;
  value: number;

  constructor(initialValue) {
    this.initialValue = initialValue;
    this.value = initialValue;
  }

  get(): number {
    return this.value;
  }

  increment(): number {
    return ++this.value;
  }

  decrement(): number {
    return --this.value;
  }

  reset(): number {
    this.value = this.initialValue;
    return this.value;
  }
}

export default function makeCounterClass(initialValue = 0) {
  return new Counter(initialValue);
}
