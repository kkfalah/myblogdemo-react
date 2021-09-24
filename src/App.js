import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/home";
import CreateBlog from "./pages/create";
import BlogDetails from "./pages/blog-details";
import NotFount from "./pages/404";


function App() {
  return (
    <Router>
    <div className="App">
      <header >
        <Header />
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFount />
          </Route>
        </Switch>
      </div>
      <footer>

      </footer>
    </div>
    </Router>
  );
}

export default App;
