import { call } from 'login/service/ApiService';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function WebBoardUpdate(props) {
   const location = useLocation();
   
   const originalBoard = location.state.board; // 넘어온 값 읽기
   console.log(originalBoard);

   const [board, setBoard] = useState(originalBoard);

   const handleChange = (e) => {
      setBoard({...board, [e.target.name] : e.target.value});
   };

   const saveHandler = () => {
      call(`http://localhost:9999/api/board/modify`, "PUT", board)
         .then((response) => {
            console.log(response);
      });
   };

   return (
      <div>
         <p>Board Update</p>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            <Form.Control name="bno" defaultValue={board.bno} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
            <Form.Control name="title" defaultValue={board.title} onChange={handleChange}/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
            <Form.Control name="content" defaultValue={board.content} onChange={handleChange}/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">작성자</InputGroup.Text>
            <Form.Control name="mname" defaultValue={board.mname} readOnly/>
         </InputGroup>
         <Button onClick={saveHandler}>수정 정보 저장</Button>
      </div>
   );
}

export default WebBoardUpdate;