
class StringBuilder {
  constructor(initialValue = '') {
      this.value = initialValue;
  }
  getValue() {
      return this.value;
  }
  padEnd(strEnd) {
      return this.value = str;
  }
  padStart(strStart) {
  return this.value.unshift(trStart);
  }
  padEnd(str) {
  return this.value.push(str).unshift(str);
}
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
