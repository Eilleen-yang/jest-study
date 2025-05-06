import { render, screen } from "@testing-library/react";
import LoginStatus from "./LoginStatus";

test('로그인 상태일 때 "환영합니다!" 표시', () => {
  render(<LoginStatus isLoggedIn={true} />);
  expect(screen.getByText("환영합니다!")).toBeInTheDocument();
});

test('비로그인 상태일 때 "로그인이 필요합니다." 표시', () => {
  render(<LoginStatus isLoggedIn={false} />);
  expect(screen.getByText("로그인이 필요합니다.")).toBeInTheDocument();
});
