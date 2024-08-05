import { call } from 'login/service/ApiService';
import React, { useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function WebBoardInsert(props) {
   const login = localStorage.getItem("login");
   const [board, setBoard] = useState({});

   const writeHandle = (event) => {
      setBoard({...board, [event.target.name] : event.target.value});
   };

   const insertHandler = () => {
      call(`http://localhost:9999/api/board/register`, "POST", board)
         .then((response) => {
            setBoard(response);
      });
   };

   return (
      <div>
         <p>Board Insert {login}</p>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            <Form.Control name="bno" defaultValue={board.bno} readOnly/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
            <Form.Control name="title" onChange={writeHandle}/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">내용</InputGroup.Text>
            <Form.Control name="content" onChange={writeHandle}/>
         </InputGroup>
         <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">작성자</InputGroup.Text>
            {/* <Form.Control name="mname" defaultValue={board.mname} readOnly/> */}
            <Form.Control name="mname" defaultValue={login} readOnly/>
         </InputGroup>
         <Button onClick={insertHandler}>등록</Button>
      </div>
   );
}

export default WebBoardInsert;