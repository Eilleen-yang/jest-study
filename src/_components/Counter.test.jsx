import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("기본값이 0으로 표시된다.", () => {
  render(<Counter />);
  expect(screen.getByText(/현재 카운트 : 0/)).toBeInTheDocument();
});

test("+ 버튼을 클릭하면 1이 증가한다.", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("+"));
  expect(screen.getByText(/현재 카운트 : 1/)).toBeInTheDocument();
});

test("+ 버튼을 클릭하면 1이 감소한다.", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("-"));
  expect(screen.getByText(/현재 카운트 : -1/)).toBeInTheDocument();
});
