import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import Blog from "./Blog.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <h2>Browser Router</h2>

        <Navbar />

        <Route path="/home">
          <h3>Route 1 [home]</h3>
        </Route>

        <Route path="/blog">
          <h3>Route 2 [blog]</h3>
          <Blog />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
