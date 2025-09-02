import { useParams } from "react-router-dom";
import BlogDetails from "./BlogDetails.tsx";

export default function BlogDetailsWrapper() {
  const { id } = useParams<{ id: string }>(); // گرفتن پارامتر id از URL
  const blogId = id ? parseInt(id) : 0;

  return <BlogDetails id={blogId} />;
}
