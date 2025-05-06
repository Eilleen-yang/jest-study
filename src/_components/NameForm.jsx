// - **요구사항**
//     - 사용자가 이름을 입력하고 제출하면, 화면에 “안녕하세요, [이름]님!” 이 표시된다.
//     - 초기에는 아무 텍스트도 보이지 않는다.
// - 테스트 요구사항
//     - 초기에는 인사말이 보이지 않는다
//     - 이름을 입력하고 제출 시 인사말이 표시된다
//     - hint) `toBeNull`, `toBeInTheDocument`

export default function NameForm() {
  return (
    <form>
      <input type="text" />
      <button>제출</button>
    </form>
  );
}
