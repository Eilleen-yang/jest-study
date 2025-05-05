import { getUser } from "./user";

// toEqual() : ex) id를 넘기면 가짜 유저 객체를 리턴하는 함수를 테스트하려한다.
test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

// toThrow() => 에러반환 Error (user.js)
test("throw when id is non negative", () => {
  // expect(getUser(-1)).toThrow();
  // 검증대상은 함수로 한번 더 감싸주어야한다.
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
