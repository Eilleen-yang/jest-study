// toHaveLength() : 배열의 길이를 체크할 때 사용
// toContain() : 특정 원소가 배열에 들어있는지를 테스트할 때 사용

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  // colors length === 3 ??
  expect(colors).toHaveLength(3);
  // color Yellow ??
  expect(colors).toContain("Yellow");
  // colors !== Green ??
  expect(colors).not.toContain("Green");
});
