import { useNavigate } from "react-router-dom";

const ACCESS_TOKEN = "ACCESS_TOKEN"; // 변수명 자유

// 1. URL, 2. 요청방식 (method), 3. 요청 시 보낼 data
export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");

  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken); // 서버의 필터에서 읽는 양식 맞춰서 작성
  }

  let options = {
    headers: headers,
    url: api,
    method: method,
  };

  // 조회는 요청 data가 없음, 입력과 수정 시에는 보내는 data 있음
  // 요청 data 있을수도, 없을수도
  if (request) {
    // GET method
    options.body = JSON.stringify(request); // 요청 문서의 body에 들어온 data를 JSON으로 변경
  }

  // 비동기 통신 : ajax, axios, fetch, promise...
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => { // JSON으로 파싱 되어서 들어옴
        console.log(json);

        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error.status);
      if (error.status === undefined || error.status === 403) {
        window.location.href = "/login"; // redirect
      }
      return Promise.reject(error);
    });
}

// userDTO = {mid: "", mpassword: ""}
export function signin(userDTO) {
  return call("http://localhost:9999/auth/login", "POST", userDTO).then( // 매번 axios를 쓰기 번거로움, 함수로 뺐음
    (response) => {
      console.log(response);
      if (response.token) {
        // 로컬 스토리지에 토큰 저장
        localStorage.setItem(ACCESS_TOKEN, response.token); // 키,  값
        // 로컬 스토리지에 로그인 유저 저장
        localStorage.setItem("login", response.login);

        // token이 존재하는 경우 Todo 화면으로 리다이렉트
        window.location.href = "/webboard/list";
      }
    }
  );
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/login";
}

export function signup(userDTO) {
  return call("http://localhost:9999/auth/signup", "POST", userDTO);
}