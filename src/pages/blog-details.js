import { useHistory, useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { Container } from "react-bootstrap";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE' 
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <Container>
      <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
    </Container>
  );
}
 
export default BlogDetails;

