import { blogs } from "./blogdata.ts";
import { useNavigate } from "react-router-dom";
import "./css.css";

interface BlogDetailsProps {
  id: number;
}

export default function BlogDetails({ id }: BlogDetailsProps) {
  const blog = blogs.find(b => b.id === id);
  const navigate = useNavigate();

  if (!blog) return <div>مطلب پیدا نشد</div>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <p>{blog.date}</p>
      <img src={blog.image} alt={blog.title} className="img" />
      <p >{blog.content}</p>
      <button onClick={() => navigate(-1)}>بازگشت</button>
    </div>
  );
}
