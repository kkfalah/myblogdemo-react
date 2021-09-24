import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand><Link to="/" ><h1>MY BLOG</h1></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="justify-content-end links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Header;