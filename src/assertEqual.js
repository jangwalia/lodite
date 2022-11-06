const correctResult = {
  message: "Assertion passed...✅✅✅✅",
};
const incorrectResult = {
  message: "Assertion failed...❌❌❌❌",
};
const assertEqual = function (received, expected) {
  return received === expected ? correctResult : incorrectResult;
};
module.exports = assertEqual;
