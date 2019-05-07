const _items = new WeakMap();

class Stack {
  // keep the array private.
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push();
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");

    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) throw new Error("Stack is empty.");

    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}
