import add from "./add";

// toBe() : 단순히 값을 비교 ===
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
