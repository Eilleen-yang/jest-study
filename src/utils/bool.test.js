// toBeTruthy() or toBeFalsy()
/**
 * 1 : true / 0 : false
 * toBeTruthy() : 검증대상이 true로 간주되면 테스트 통과
 * toBeFalsy() : 반대로 flase로 간주되는 경우 테스트가 통과
 */
test("number 0 is falsy, but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});
