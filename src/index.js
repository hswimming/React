import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'; // 중괄호 {} 없으면 default
import reportWebVitals from './reportWebVitals';
// import MyApp1 from './day1/MyApp1';
// import MyApp2 from './day1/MyApp2';
// import EnvTest from 'day1/EnvTest'; // jsonconfig.json 설정 파일에서 절대 경로를 설정함 (src를 기본 경로로 잡음)
// import MyApp2 from 'day1/MyApp2';
// import MyApp1 from 'day1/MyApp1';
// import MyApp3 from 'day2/MyApp3';
// import MyApp4 from 'day2/MyApp4';
import MyApp5 from 'day2/MyApp5';

// index.html 내부에 있는 <div id="root"></div> 부분에 들어간다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// 개발환경에서만 활성화되는 잠재적 이슈를 발견하기 위한 디버깅용 (2번 렌더링 현상 발생)
// 문제가 될 수 있는 소지를 발견했다는 뜻
/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
*/

// root.render(<App />); // App.js에서 export한 태그로 사용

root.render(
  <div>
    {/* 
      <MyApp1/>
      <App/>
    */}

    <h1>React JS 시작하기</h1>
    {/* <MyApp1/> */}
    {/* <MyApp2/> */}
    {/* <EnvTest/> */}

    {/* <MyApp3/> */}
    {/* <MyApp4/> */}
    <MyApp5/>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();