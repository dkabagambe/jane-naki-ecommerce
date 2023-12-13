import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Productpage";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./img/logo.png";

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="">
            <Container>
              <LinkContainer to="/">
                <img src={logo} alt=" logo" />
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">
            <span className="copy"> &copy; </span>
            <span className="year">{currentYear} </span>
            <span className="word">, Jane Naki Sales</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
