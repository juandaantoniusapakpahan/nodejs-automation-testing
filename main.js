const assert = require("assert");
const typeTriangle = require("./typeTriangle");

try {
  assert.strictEqual(typeTriangle(4, 4, 4), "Segitiga sama sisi");
  assert.strictEqual(typeTriangle(4, 6, 4), "Segitiga sama kaki");
  assert.strictEqual(typeTriangle(4, 5, 6), "Segitiga sembarang");
  console.log("Seluruh pengujian berhasil");
} catch (e) {
  console.error(e);
}
