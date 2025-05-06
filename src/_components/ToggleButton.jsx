// - **기능 요구사항**
//     - 버튼을 클릭하면 “켜짐” ↔ “꺼짐” 상태가 전환된다.
//     - 초기 상태는 꺼짐이다.
//     - 버튼을 클릭할 때마다 텍스트가 바뀐다.
// - 테스트 요구사항
//     - 초기 상태는 "꺼짐"이다
//     - 클릭 시 "켜짐"으로 변경된다
//     - 다시 클릭 시 "꺼짐"으로 돌아간다
//     - hint) `toHaveTextContent()`

export default function ToggleButton() {
  return <button>TOGGLE BUTTON</button>;
}
