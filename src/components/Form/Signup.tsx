import styles from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.signupContainer}>
        <form className={styles.signupForm} action="" method="post">
          <h1>ثبت نام</h1>
  <div>
    <label htmlFor="name">نام</label>
    <input type="text" name="name" />
  </div>

  <div>
    <label htmlFor="lastname">نام خانوادگی</label>
    <input type="text" name="lastname" />
  </div>

  <div>
    <label htmlFor="email">ایمیل</label>
    <input type="email" name="email" />
  </div>

  <div>
    <label htmlFor="password">پسورد</label>
    <input type="password" name="password" />
  </div>

  <div>
    <label htmlFor="configpassword">تکرار پسورد</label>
    <input type="password" name="configpassword" />
  </div>

  <div>
    <label htmlFor="phone">شماره تلفن</label>
    <input type="text" placeholder=" (اختیاری)" />
  </div>

  <button type="submit">ثبت نام</button>
</form>

      </div>
    </div>
  );
}
