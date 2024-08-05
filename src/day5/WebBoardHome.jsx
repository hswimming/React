import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import WebBoardDelete from './WebBoardDelete';
import WebBoardDetail from './WebBoardDetail';
import WebBoardInsert from './WebBoardInsert';
import WebBoardList from './WebBoardList';
import WebBoardUpdate from './WebBoardUpdate';

function WebBoardHome(props) {
   // 원하는 경로로 이동 가능 (location.href 역할)
   const navi = useNavigate();

   const clickHandler1 = () => {
      navi("/");
   };

   const clickHandler2 = () => {
      navi("/webboard/list");
   };

   const clickHandler3 = () => {
      navi(-1);
   };

   const [board, setBoard] = useState({bno : 100, title : "react 배우기"});

   return (
      <div>
         <h1>Web Board CRUD</h1>

         {/* <a> 태그 역할 */}
         <Link to="list">목록보기</Link>
         {' '}
         {/* <Link to="detail/99">상세보기로 이동</Link> */}
         <Link to="insert">입력</Link>
         {' '}
         {/* state : 주소에 보이지 않게 넘김, 값이 많을 경우 이 방법이 더 좋음 */}
         {/* 오브젝트로 값을 넘김 */}
         {/* <Link to="update" state={{board : board}}>수정</Link>{' '} */}
         {/* <Link to="delete" state={{bno : 99}}>삭제</Link> */}
         <Button onClick={clickHandler1}>처음 화면으로 이동</Button>{' '}
         <Button onClick={clickHandler2}>WebBoard 목록으로 이동</Button>{' '}
         <Button onClick={clickHandler3}>이전 페이지로 이동</Button>

         <Routes>
            <Route path="list" element={<WebBoardList/>}></Route>
            <Route path="detail/:bno" element={<WebBoardDetail/>}></Route> {/* 파라미터로 값 넘기기 */}
            <Route path="insert" element={<WebBoardInsert/>}></Route>
            <Route path="update" element={<WebBoardUpdate/>}></Route>
            <Route path="delete" element={<WebBoardDelete/>}></Route>
         </Routes>
      </div>
   );
}

export default WebBoardHome;