import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function InputStudent({student, changeHandler}) {
   // var {student, changeHandler} = props;
   // 선언하고 props.student.name => 계속 사용하기 번거로움, 처음부터 속성으로 받으면 편함

   return (
      <div>
         <h2>정보 입력</h2>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.name} name='name'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">메일</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.email} name='email'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.age} name='age'/>
         </InputGroup>
      </div>
   );
}

export default InputStudent;