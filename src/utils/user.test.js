import { getUser } from "./user";

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test("throw when id is non negative", () => {
  // expect(getUser(-1)).toThrow();
  // 검증대상은 함수로 한번 더 감싸주어야한다.
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
