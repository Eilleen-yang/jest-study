import { fetchUser, fetchPromiseUser } from "./user";

// 콜백함수 테스트
test("fetch a user", (done) => {
  fetchUser(1, (user) => {
    // 1 통과, 2 실패
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
    done();
  });
});

// Promise 테스트 : return문 반드시 추가
test("fetch a user", () => {
  return fetchPromiseUser(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

// async/await 테스트
test("async/await a user", async () => {
  const user = await fetchPromiseUser(1); // 1성공 2실패
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});
