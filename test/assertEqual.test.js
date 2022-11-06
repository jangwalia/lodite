const { expect } = require("chai");
const chai = require("chai"); // import the chai library
const assert = chai.expect; // establish a variable to be used in our tests
const assertEqual = require("../src/assertEqual");
describe("assertEqual test", () => {
  it("return  failed if received is not equal to expected", () => {
    const arg1 = "Day";
    const arg2 = "night";
    const result = assertEqual(arg1, arg2);
    expect(result.message).equal("Assertion failed...❌❌❌❌");
  });
  it("it return passed test if received is equal to expected", () => {
    const arg1 = 50;
    const arg2 = 50;
    const result = assertEqual(arg1, arg2);
    expect(result.message).equal("Assertion passed...✅✅✅✅");
  });
});
