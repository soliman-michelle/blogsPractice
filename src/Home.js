import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8080/blogs');
  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {/* evaluate from left to right since blogs == null, it is false and it will perform the right expression */}
    { blogs && <BlogList blogs={blogs} title="All Skills" />}
    </div>
  )
  }
export default Home;