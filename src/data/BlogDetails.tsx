import { blogs } from "./blogdata.ts";

interface BlogDetailsProps {
  id: number;
}

export default function BlogDetails({ id }: BlogDetailsProps) {
  const blog = blogs.find(b => b.id === id);
  if (!blog) return <div>مطلب پیدا نشد</div>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.date}</p>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.excerpt}</p>
      {/* اینجا میتونی متن کامل مطلب اضافه کنی */}
    </div>
  );
}
