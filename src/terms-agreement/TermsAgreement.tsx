export function TermsAgreement() {
  return (
    <form>
      <div>
        <label>
          <input type="checkbox" /> 전체 동의
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> 이용약관 동의(필수)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> 개인정보처리방침 동의(필수)
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" /> 마케팅 수신 동의(선택)
        </label>
      </div>
      <button type="submit" disabled>
        회원가입
      </button>
    </form>
  );
}
