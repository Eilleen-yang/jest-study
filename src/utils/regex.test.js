// toMatch() : 정규식 기반의 테스트가 필요할 때 사용

import { getUser } from "./user";

test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});
