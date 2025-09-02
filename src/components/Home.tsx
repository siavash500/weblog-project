import { useState, useEffect, useRef } from "react";
import { blogs } from "../data/blogdata.ts";

import Mount1 from "./style/mounten.jpeg";
import Mount2 from "./style/mounten2.jpeg";
import Mount3 from "./style/mounten3.jpeg";
import Mount4 from "./style/mounten4.jpeg";
import bluesky from "./style/img/bluesky.jpeg";
import "./style/Home.css";

export default function Home() {

  const images = [Mount1, bluesky];
  const bgColors = [
    "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // حالت عادی
"linear-gradient(135deg, #d0e2f0 0%, #a8cfe5 100%)" // شفق قطبی ملایم و شیک
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // state برای شناسایی اینکه شفق فعال است یا نه
  const isAurora = current === 1;

  useEffect(() => {
  intervalRef.current = window.setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 5000); // 5000 میلی‌ثانیه = 5 ثانیه

  return () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
  };
}, []);


  return (
    <div
      className="home-container"
      style={{
        background: bgColors[current],
        transition: "background 1s ease"
      }}
    >
      <div className="home-content">
        <div className="home-text">
          <h1
            className="home-title"
           
          >
            به وبلاگ کوهنوردی من خوش آمدید
          </h1>
          <p
            className="home-description"
           
          >
            اینجا مکانی برای به اشتراک گذاری تجربیات و عکس‌های کوهنوردی من است.
            از دیدن منظره‌های breathtaking لذت ببرید.
          </p>
        </div>

        <div className="home-image-container">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`تصویر ${i}`}
              className={`home-image ${i === current ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="blog-section">
        <h2 className="blog-section-title" >آخرین مطالب وبلاگ</h2>

       
           <div className="blog-grid">
              {blogs.map(blog => (
                <div key={blog.id} className="blog-card">
                  <div className="blog-image-container">
                    <img src={blog.image} alt={blog.title} className="blog-image" />
                    <div className="blog-date">{blog.date}</div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <button className="blog-read-more">ادامه مطلب</button>
                  </div>
                </div>
              ))}
        </div>

        {/* /////// */}

        <div className="blog-actions">
          <button className="view-all-blogs">مشاهده همه مطالب</button>
        </div>
      </div>
    </div>
  );
}
