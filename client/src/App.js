import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Jane naki</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
