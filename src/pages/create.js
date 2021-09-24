import { useState } from "react";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Author 1");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      // history.go(-1);
      history.push("/");
      setIsPending(false);
    });
  };

  return (
    <Container>
      <h2>Create New Blog</h2>
      <div className="create">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Blog Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Blog Content:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter blog content"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Blog Author:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option>Select</option>
              <option value="Author 1">Author 1</option>
              <option value="Author 2">Author 2</option>
              <option value="Author 3">Author 3</option>
            </Form.Select>
          </Form.Group>
          {!isPending && (
            <Button variant="primary" type="submit">
              Add Blog
            </Button>
          )}
          {isPending && (
            <Button variant="primary" type="submit" disabled>
               <Spinner animation="border" size="sm" variant="light" /> 
               Adding Blog
            </Button>
          )}
        </Form>
      </div>
    </Container>
  );
};

export default CreateBlog;
