export const assertEqual = function (received, expected) {
  received === expected
    ? console.log(`its Passed...✅✅✅✅`)
    : console.log(`its failed...❌❌❌❌`);
};
assertEqual(2, 2);
assertEqual("light", "dark");
