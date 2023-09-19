import { Link } from "react-router-dom/cjs/react-router-dom.min"

const BlogList = ({blogs, title, handleDelete}) => {

  return (
    <div className="blog-list">
        <h2>{title}</h2>
         {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
          <h3>{blog.title}</h3>
          <h6>Written by {blog.author}</h6>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList