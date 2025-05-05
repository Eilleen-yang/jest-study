test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  // colors length === 3 ??
  expect(colors).toHaveLength(3);
  // color Yellow ??
  expect(colors).toContain("Yellow");
  // colors !== Green ??
  expect(colors).not.toContain("Green");
});
