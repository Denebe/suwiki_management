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


//로그인api 0
export const loginApi = (setData, setLoading, id, pw) => {
  const url = `https://api.suwiki.kr/admin/login`;
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
        path: '/',
        //httpOnly: true,
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
export const noticeApi = async (page) => {
  return instance({
    url: `/notice/all?page=${page}`,
    method: "GET",
  });
};

//공지사항 자세히 api
export const noticeDetailApi = async (notice) => {
  return instance({
    url: `/notice/?noticeId=${notice}`,
    method: 'GET',
  });
};

//공지사항쓰기 api
export const noticeWriteApi = (setData, setLoading, title, content) => {
  const url = `https://api.suwiki.kr/notice/`;

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
      alert('글쓰기 성공')
    },
    (error) => {
      console.log(error.response.data);

      alert("error");
    }
  );
};

//공지사항수정 api
export const noticeUpdateApi = (setData, setLoading, id, title, content) => {
  const url = `https://api.suwiki.kr/notice/?noticeId=${id}`;

  const data = {
    title: title,
    content: content,
  };
  const options = {
    method: "PUT",
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

//공지사항 삭제 api
export const noticeDeleteApi = (id) => {
  const url = `https://api.suwiki.kr/notice/?noticeId=${id}`;

  const options = {
    method: 'DELETE',
    headers: {
      Authorization: getCookie('AccessToken'),
    },
    url,
  };
  axios(options).then(
    (response) => {
      console.log(id)
      alert('삭제완료');
      window.location.reload();
    },
    (error) => {
      console.log(error)
      alert('error');
    }
  );
};

//강의평가 게시글 ban api
export const evaluateBanApi = (id, reason, judge, time) => {
  const url = `https://api.suwiki.kr/admin/ban/evaluate-post`;

  const data = {
    evaluateIdx: id,
    bannedReason: reason,
    judgement: judge,
    bannedTime: time
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
      console.log(r)
    },
    (error) => {
      console.log(error.response.data);
      console.log(data)
    }
  );
};
//alert창 에러 확인

//시험평가 벤
export const examBanApi = (id, reason, judge, time) => {
  const url = `https://api.suwiki.kr/admin/ban/exam-post`;

  const data = {
    examIdx: id,
    bannedReason: reason,
    judgement: judge,
    bannedTime: time
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
      console.log(r)
    },
    (error) => {
      console.log(error.response);
    }
  );
};

//강의평가 게시글 이상없음
export const noBanEvaluateApi = (id) => {
  const url = `https://api.suwiki.kr/admin/no-problem/evaluate-post`;

  const data = {
    evaluateIdx: id,

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
      console.log(r)
    },
    (error) => {
      console.log(error.response.data);
      alert("error");
      console.log(data)
    }
  );
};

export const noBanExamApi = (id) => {
  const url = `https://api.suwiki.kr/admin/ban/exam-post`;

  const data = {
    examIdx: id,

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
      console.log(r)
    },
    (error) => {
      console.log(error.response);
      alert("error");
    }
  );
};

//신고 게시글 리스트 api
export const mainApi = async () => {
  return instance({
    url: `/admin/report/list`,
    method: "GET",
  });

};

export const blackEvaluateApi = (id, reason, judge) => {
  const url = `https://api.suwiki.kr/admin/blacklist/evaluate-post`;

  const data = {
    evaluateIdx: id,
    bannedReason: reason,
    judgement: judge
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
      console.log(r)
    },
    (error) => {
      console.log(error.response);
      alert("error");
    }
  );
};


export const blackExamApi = (id, reason, judge) => {
  const url = `https://api.suwiki.kr/admin/blacklist/exam-post`;

  const data = {
    examIdx: id,
    bannedReason: reason,
    judgement: judge
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
      console.log(r)
    },
    (error) => {
      console.log(error.response);
      alert("error");
    }
  );
};
