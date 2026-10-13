const { add, applyDiscount, calculateTotal } = require("./utils");

// Step 1: Unit tests
describe("Unit tests", () => {
  test("add works", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("applyDiscount works", () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });
});

// Step 2: Integration tests
describe("Integration tests", () => {
  test("calculateTotal uses add and applyDiscount together", () => {
    expect(calculateTotal([50, 50], 10)).toBe(90);
  });

  test("calculateTotal with zero discount", () => {
    expect(calculateTotal([10, 20, 30], 0)).toBe(60);
  });
});