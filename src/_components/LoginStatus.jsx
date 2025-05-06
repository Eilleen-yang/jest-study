export default function LoginStatus({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <p>환영합니다!</p> : <p>로그인이 필요합니다.</p>}</div>
  );
}
