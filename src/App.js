import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Home, Write, NoticeDetail, Update, Report } from "./Pages";
import { Cookies } from "react-cookie";
import Notice from "./Pages/Notice";
const App = () => {
  const cookies = new Cookies();
  let loading = cookies.get("AccessToken")

  // if (process.env.NODE_ENV === "production") {
  //   console.log = function no_console() { };
  //   console.warn = function no_console() { };
  // }
  return (
    <BrowserRouter>
      <Routes>
        {loading ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/noticedetail" element={<NoticeDetail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/update" element={<Update />} />
            <Route path="/report" element={<Report />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
