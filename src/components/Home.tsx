import Mount1 from "./style/mounten.jpeg"
import Mount2 from "./style/mounten2.jpeg"
import Mount3 from "./style/mounten3.jpeg"
import Mount4 from "./style/mounten4.jpeg"
import "./style/Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">به وبلاگ کوهنوردی من خوش آمدید</h1>
          <p className="home-description">
            اینجا مکانی برای به اشتراک گذاری تجربیات و عکس‌های کوهنوردی من است.
            از دیدن منظره‌های breathtaking لذت ببرید.
          </p>
        </div>
        <div className='home-image-container'>
          <img src={Mount1} alt="تصویر کوهستان" className="home-image"/>
        </div>
      </div>

      <div className="blog-section">
        <h2 className="blog-section-title">آخرین مطالب وبلاگ</h2>
        
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image-container">
              <img src={Mount2} alt="صعود به دماوند" className="blog-image" />
              <div className="blog-date">۲۵ مرداد ۱۴۰۲</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">صعود به قله دماوند</h3>
              <p className="blog-excerpt">
                تجربه بی‌نظیر صعود به بام ایران در فصل تابستان. هوای خنک و منظره‌های فوق‌العاده...
              </p>
              <button className="blog-read-more">ادامه مطلب</button>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image-container">
              <img src={Mount3} alt="کوهستان آلپ" className="blog-image" />
              <div className="blog-date">۱۲ تیر ۱۴۰۲</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">سفر به کوهستان آلپ</h3>
              <p className="blog-excerpt">
                گزارش سفر به آلپ سوئیس و تجربه کوهنوردی در یکی از زیباترین رشته کوه‌های جهان...
              </p>
              <button className="blog-read-more">ادامه مطلب</button>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-image-container">
              <img src={Mount4} alt="دره سبز" className="blog-image" />
              <div className="blog-date">۳ خرداد ۱۴۰۲</div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">پیاده‌روی در دره سبز</h3>
              <p className="blog-excerpt">
                گشت‌وگذار در دره‌ای سرسبز و پوشیده از جنگل‌های انبوه و رودخانه‌های خروشان...
              </p>
              <button className="blog-read-more">ادامه مطلب</button>
            </div>
          </div>
        </div>

        <div className="blog-actions">
          <button className="view-all-blogs">مشاهده همه مطالب</button>
        </div>
      </div>
    </div>
  );
}