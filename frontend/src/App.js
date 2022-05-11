import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, Write, NoticeDetail, Update, Report } from "./Pages";
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
        <Route path="/update" element={<Update />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
