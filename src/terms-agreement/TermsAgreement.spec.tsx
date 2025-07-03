import { render, screen } from "@testing-library/react";
import { TermsAgreement } from "./TermsAgreement";

describe("TermsAgreement 컴포넌트", () => {
  it("초기 렌더링 시 회원가입 버튼이 비활성화 되어 있다", () => {
    render(<TermsAgreement />);
    const button = screen.getByRole("button", { name: "회원가입" });

    expect(button).toBeDisabled();
  });
});
