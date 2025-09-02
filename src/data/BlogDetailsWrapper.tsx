import { useParams } from "react-router-dom";
import BlogDetails from "./BlogDetails.tsx";

export default function BlogDetailsWrapper() {
  const { id } = useParams<{ id: string }>(); // گرفتن id از URL
  const blogId = id ? parseInt(id) : null;

  if (!blogId) return <div>آدرس نامعتبر است</div>; // بررسی id نامعتبر

  return <BlogDetails id={blogId} />; // فرستادن id به BlogDetails
}
