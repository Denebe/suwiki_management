import axios from "axios";
import { Cookies } from "react-cookie";
import instance from "./ApiController";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name) => {
  return cookies.get(name);
};

const PROXY_URL = window.location.hostname === "localhost" ? "" : "/proxy";

//로그인api 0
export const loginApi = (setData, setLoading, id, pw) => {
  const url = `${PROXY_URL}/user/login`;
  const data = {
    loginId: id,
    password: pw,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      console.log("connect");
      console.log(r.data);
      setData(r.data);
      setLoading(true);
      setCookie("AccessToken", r.data["AccessToken"], {
        path: "/",
        secure: true,
        sameSite: false,
      });
      setCookie("RefreshToken", r.data["RefreshToken"], {
        path: "/",
        secure: true,
        sameSite: false,
      });
    },
    (error) => {
      console.log(error.response);
      console.log(data);
      alert("id 또는 pw 확인해주세요");
    }
  );
};

//공지사항 api
export const noticeApi = async () => {
  return instance({
    url: `/notice/findAllList`,
    method: "GET",
  });
};

export const noticeDetailApi = async (notice) => {
    return instance({
      url: `/notice/?noticeId=${notice}`,
      method: 'GET',
    });
  };

//공지사항쓰기 api
export const noticeWriteApi = (setData, setLoading, title, content) => {
  const url = `/notice/write`;

  const data = {
    title: title,
    content: content,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("AccessToken"),
    },
    data: data,
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      console.log(error.response);
      alert("error");
    }
  );
};
