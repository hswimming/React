import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import DisplayStudentList from './DisplayStudentList';

// class Component에서 상태관리를 위해 : state, setState()
// function Component에서 상태관리를 위해 : useState()

const initStudent = {stdId : 1, stdName : "황수영", major : "실내건축"};

function StateTest4(props) {
   const [student, setStudent] = useState(initStudent); // 1건의 객체
   const [studentList, setStudentList] = useState([initStudent, initStudent, initStudent]); // 여러건의 객체

   const changeHandler = (event) => {
      // event => 태그 안에 있는 name 값
      // 기존에 있던 학생들을 전부 바꾸는게 아님, 기존 값도 불러와야 함
      setStudent({...student, [event.target.name] : event.target.value});
   };

   const addHandler = () => {
      // 기존 학생 목록에 추가한 학생 넣기
      setStudentList([...studentList, student]);
   };

   return (
      <div>
         <h2>학생 정보 입력</h2>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">학생 번호</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.stdId} name='stdId'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">학생 이름</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.stdName} name='stdName'/>
         </InputGroup>
         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">전공</InputGroup.Text>
         <Form.Control onChange={changeHandler} defaultValue={student.major} name='major'/>
         </InputGroup>
         <Button onClick={addHandler}>추가</Button>

         {/*
         <h2>학생 정보 목록</h2>
         <Card style={{ width: '30rem' }}>
            <ListGroup variant="flush">
               {studentList.map((item, index) => (
                  <ListGroup.Item key={index}>
                     {item.stdName} 학생의 전공은 {item.major}
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </Card>
         */}

         {/* 부모가 자식에게 속성 추출해서 이름으로 넘겨줌 */}
         <DisplayStudentList studentList={studentList}/>
      </div>
   );
}

export default StateTest4;