import { render, screen } from "@testing-library/react";
import { InputForm } from "./InputForm";
import { userEvent } from "@testing-library/user-event";

describe("InputForm 컴포넌트", () => {
  it("초기 렌더링 시 입력창은 비어 있다", () => {
    render(<InputForm />);
    const input = screen.getByPlaceholderText("이름을 입력하세요");

    expect(input).toHaveValue("");
  });

  it("아무것도 입력하지 않고 제출하면 입력값이 에러 메시지가 표시된다.", async () => {
    const user = userEvent.setup();
    render(<InputForm />);

    const button = screen.getByText("제출");

    await user.click(button);

    expect(screen.getByText("이름을 입력해주세요.")).toBeInTheDocument();
  });

  it("제출 후 입력창이 비워진다", async () => {
    const user = userEvent.setup();
    render(<InputForm />);
    const input = screen.getByPlaceholderText("이름을 입력하세요");
    const button = screen.getByText("제출");

    await user.type(input, "홍길동");
    await user.click(button);

    expect(input).toHaveValue("");
  });
});
