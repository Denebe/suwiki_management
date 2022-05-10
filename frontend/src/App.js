import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, Write, NoticeDetail } from "./Pages";
import Notice from "./Pages/Notice";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/noticedetail" element={<NoticeDetail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
