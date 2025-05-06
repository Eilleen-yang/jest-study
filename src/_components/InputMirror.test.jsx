import { fireEvent, render, screen } from "@testing-library/react";
import InputMirror from "./InputMirror";

test("입력한 값이 화면에 표시된다", () => {
  render(<InputMirror />);
  const input = screen.getByPlaceholderText("입력하세요");

  fireEvent.change(input, { target: { value: "Hello Jest!" } });

  expect(screen.getByText("입력한 값 : Hello Jest!")).toBeInTheDocument();
});
