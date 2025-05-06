// - **요구사항**
//     - 할 일 목록을 보여준다.
//     - 초기 할 일 2개를 렌더링한다.
//         - 초기 할 일 : `["React 공부하기", "테스트 배우기"]`
//     - “할 일 추가” 버튼을 누르면 새 할 일이 추가된다.
//         - 새 할 일 : ``새 할 일 ${prev.length + 1}``
// - 테스트 요구사항
//     - 초기 할 일이 2개 표시된다
//     - 할 일 추가 버튼을 누르면 새 항목이 추가된다
//     - hint) `toHaveTextContent`, `toBeInTheDocument`

export default function TodoList() {
  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <button>할 일 추가</button>
    </div>
  );
}
