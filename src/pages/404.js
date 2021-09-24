import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFount = () => {
  return (
   <Container>
     <h2>Sorry</h2>
     <h3>Requested page not found</h3>
     <Link to="/">Go to Home </Link>
   </Container>
  );
}
 
export default NotFount;