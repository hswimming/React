import axios from 'axios';
import { call } from 'login/service/ApiService';
import { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function WebBoardDetail(props) {
   // 파라미터 받기 (객체로 넘어온다) => {"bno" : 20, "aa" : 1, "bb" : 2}
   const {bno} = useParams();
   console.log("파라미터 받기 : " + bno);

   const [board, setBoard] = useState({}); // 1건의 데이터가 오니까 객체로

   /*
   useEffect(() => {
      // ajax, fetch, promise...비동기 통신
      // 갔다온 후 성공하면 then 수행, 실패하면 catch 수행
      axios({
         url : `http://localhost:9999/api/board/detail/${bno}`,
         method : "GET",

      }).then((response) => {
         setBoard(response.data); // 1건의 data

      }).catch((error) => {
         console.log(error);
      });

   }, []); // 의존 배열이 빈 배열이면 최초 렌더링 시 1회 수행
   */

   useEffect(() => {
      call(`http://localhost:9999/api/board/detail/${bno}`, "GET", null)
         .then((response) => {
            setBoard(response);
         });
   }, []);

   return (
      <div>
         <p>Board Detail</p>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            <Form.Control name="bno" defaultValue={board.bno} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
            <Form.Control name="title" defaultValue={board.title} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
            <Form.Control name="content" defaultValue={board.content} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">작성자</InputGroup.Text>
            <Form.Control name="mname" defaultValue={board.mname} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">작성일</InputGroup.Text>
            <Form.Control name="regdate" defaultValue={board.regdate} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">수정일</InputGroup.Text>
            <Form.Control name="updatedate" defaultValue={board.updatedate} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">댓글 수</InputGroup.Text>
            <Form.Control name="replyCount" defaultValue={board.replyCount} readOnly/>
         </InputGroup>
         <Link to="/webboard/update" state={{board : board}}>수정</Link>{' '}
         <Link to="/webboard/delete" state={{bno : board.bno}}>삭제</Link>
      </div>
   );
}

export default WebBoardDetail;