import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <h1>صفحه ورود</h1>
        <form className={styles.loginForm}>
          <div className="form-group">
            <label>ایمیل</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>رمز عبور:</label>
            <input type="password" />
          </div>
          <button type="submit">ورود</button>
        </form>
      </div>
    </div>
  );
}
