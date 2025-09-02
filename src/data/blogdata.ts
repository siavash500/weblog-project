import Mount2 from "./mounten2.jpeg";
import Mount3 from "./mounten3.jpeg";
import Mount4 from "./mounten4.jpeg";
import Mount5 from "./mounten11.jpeg";
// blogdata.ts
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}


export const blogs: Blog[] = [
  {
    id: 1,
    title: "صعود به قله دماوند",
    excerpt: "تجربه بی‌نظیر صعود به بام ایران در فصل تابستان...",
    date: "۲۵ مرداد ۱۴۰۲",
    image: Mount2
  },
  {
    id: 2,
    title: "سفر به کوهستان آلپ",
    excerpt: "گزارش سفر به آلپ سوئیس و تجربه کوهنوردی در یکی از زیباترین رشته کوه‌های جهان...",
    date: "۱۲ تیر ۱۴۰۲",
    image: Mount3
  },
  {
    id: 3,
    title: "پیاده‌روی در دره سبز",
    excerpt: "گشت‌وگذار در دره‌ای سرسبز و پوشیده از جنگل‌های انبوه و رودخانه‌های خروشان...",
    date: "۳ خرداد ۱۴۰۲",
    image: Mount4
  },
  {
    id: 3,
    title: "پیاده‌روی در دره سبز",
    excerpt: "گشت‌وگذار در دره‌ای سرسبز و پوشیده از جنگل‌های انبوه و رودخانه‌های خروشان...",
    date: "۳ خرداد ۱۴۰۲",
    image: Mount5
  }
];
