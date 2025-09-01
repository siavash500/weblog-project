import "./style/about.css"
export default function About() {
  return (
    <div className='about-container'>
      <h1 className="about-title">درباره ما</h1>
      
      <div className="about-content">
        <section className="about-section">
          <h2 className="about-subtitle">تاریخچه ما</h2>
          <p className="about-text">
            در این بخش می‌توانید تاریخچه شکل‌گیری شرکت یا کسب‌وکار خود را شرح دهید. 
            چه سالی تأسیس شدید؟ چه انگیزه‌ای باعث شروع کار شما شد؟ 
            چه چالش‌هایی را پشت سر گذاشته‌اید و چه دستاوردهایی داشته‌اید؟
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">ماموریت و چشم‌انداز</h2>
          <p className="about-text">
            در این قسمت ماموریت، ارزش‌ها و چشم‌انداز شرکت خود را بیان کنید. 
            چه اهدافی دارید؟ می‌خواهید به کجا برسید؟ 
            چه ارزش‌هایی برای شما و تیم‌تان مهم هستند؟
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">تیم ما</h2>
          <p className="about-text">
            در مورد تیم خود صحبت کنید. اعضای تیم چه کسانی هستند؟ 
            چه تخصص‌ها و مهارت‌هایی دارند؟ 
            چه چیزی همکاری با آن‌ها را خاص می‌کند؟
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-subtitle">چرا ما را انتخاب کنید؟</h2>
          <p className="about-text">
            در این بخش توضیح دهید که چه چیزی شما را از رقبا متمایز می‌کند. 
            چه مزیت‌های رقابتی دارید؟ 
            چرا مشتریان باید شما را انتخاب کنند؟
          </p>
        </section>
      </div>
    </div>
  );
}