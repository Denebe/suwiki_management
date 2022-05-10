import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, Notice, Write } from "./Pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
