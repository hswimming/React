import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'; // 중괄호 {} 없으면 default
import reportWebVitals from './reportWebVitals';
// import EnvTest from 'day1/EnvTest'; // jsonconfig.json 설정 파일에서 절대 경로를 설정함 (src를 기본 경로로 잡음)
import SmartHome from 'day4/SmartHome';
import NotFound from 'day5/NotFound';
import WebBoardHome from 'day5/WebBoardHome';
import AppComponent from 'project3/AppComponent';
import App from 'project4/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'login/Home';
import Login from 'login/Login';
import SignUp from 'login/SignUp';

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
    {/* <h1>React JS 시작하기</h1> */}
    {/* <AppComponent/> */}

    {/* 주소에 따른 Element로 교체된다 */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/*" element={<NotFound/>}/>
        
        <Route path="/project3" element={<AppComponent/>}></Route>
        <Route path="/project4/*" element={<App/>}/>
        <Route path="/webboard/*" element={<WebBoardHome/>}></Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();