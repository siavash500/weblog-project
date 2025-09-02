import { blogs } from "./blogdata.ts";
import { Link } from "react-router-dom";

export default function BlogList() {
  return (
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
            <Link to={`/blogs/${blog.id}`}>
              <button className="blog-read-more">ادامه مطلب</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
