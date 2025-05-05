// toThrow() : 예외 발생 여부를 테스트해야 할 때 함수를 사용한다.
// 인자도 받는다.
// 문자열을 넘기면 예외 메세지를 비교하고
// 정규식을 넘기면 정규식 체크를 해준다.

export function getUser(id) {
  if (id <= 0) throw new Error("Invalid ID");
  return {
    id,
    email: `user${id}@test.com`,
  };
}
