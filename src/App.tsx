import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Overview } from "./pages/overview";
import "./App.css"

function App() {
  return (
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Overview />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
