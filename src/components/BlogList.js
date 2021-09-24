import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

const BlogList = ({ blogs, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <Card className="blog-preview" key={blog.id}>
            <Card.Body>
              <Link to={`/blogs/${blog.id}`}>
                <Card.Title><h2>{blog.title}</h2></Card.Title>
                <Card.Text as="div">Written by {blog.author} </Card.Text>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default BlogList;
