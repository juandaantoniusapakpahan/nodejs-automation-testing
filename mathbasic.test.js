const { describe, it, expect } = require("@jest/globals");
const MathBasic = require("./MathBasic");

describe("Kalkulator", () => {
  it("Penjumlahan. Seharusnya mengembalikan nilai benar", () => {
    expect(MathBasic.add(2, 3)).toEqual(5);
    expect(MathBasic.add(2, 2)).toEqual(4);
    expect(MathBasic.add(2, 12)).toEqual(14);
  });

  it("Pengurangan. Seharusnya mengembalikan nilai benar", () => {
    expect(MathBasic.subtract(32, 30)).toEqual(2);
    expect(MathBasic.subtract(33, 34)).toEqual(-1);
    expect(MathBasic.subtract(10, 5)).toEqual(5);
  });

  it("Perkalian. Seharusnya mengembalikan nilai benar", () => {
    expect(MathBasic.multiply(3, 2)).toEqual(6);
    expect(MathBasic.multiply(100, 100)).toEqual(10000);
    expect(MathBasic.multiply(1000000, 100)).toEqual(100000000);
  });

  it("Perbagian. Seharusnya mengembalikan nilai benar", () => {
    expect(MathBasic.divide(5, 2)).toEqual(2.5);
    expect(MathBasic.divide(4, 2)).toEqual(2);
    expect(MathBasic.divide(1000000, 2)).toEqual(500000);
  });
});
