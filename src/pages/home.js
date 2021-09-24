import { Alert, Spinner } from "react-bootstrap";
import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <Alert variant="danger">{ error }</Alert> }
      { isPending && <div className="text-center"><Spinner animation="border" variant="danger" /></div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>

  );
}
 
export default Home;