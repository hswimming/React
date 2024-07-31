import React, { useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';

function StateTest2(props) {
   const [member, setMember] = useState({name : "수영", age : 29});
   // const [memberList, setMemberList] = useState([member, {name : "보리", age : 10}]);
   const [memberList, setMemberList] = useState([member, member, member]);

   const f1 = () => {
      var obj = {name : "보리", age : 10};
      obj["age"] = 40;
      obj.age = 50;
      var name2 = "신한"; // 없던 값을 넣으면 추가
      obj[name2] = "신한"; // 속성의 이름이 아닌 변수
      console.log("1 : ", obj); // 최종 값이 들어감
      
      var obj2 = {...obj, age : 99};
      console.log("2 : ", obj2);
   };

   f1();

   // 입력한 새로운 member 넣어주기
   const onMemberChangeHandler = (e) => {
      var newMember = {...member, [e.target.name] : e.target.value};
      setMember(newMember);

      console.log(e.target.name, e.target.age, e.target.value);

      // 아래와 같은 뜻
      /*
      var a = {name : "aa"};
      a["name"] = "bb"
      */
      // 속성은 [] 감싸야 함
      // setMember({...member, [e.target.name] : e.target.value}); // 속성 비동기처리
      console.log("setMember 비동기 처리됨, setting 후 출력이 아님", member);

   };
   
   // 값이 바뀔 때 마다 넣는것 보다 버튼 눌렀을 때 추가하도록
   const addHandler = () => {
      setMemberList([...memberList, member]);
   };

   return (
      <div>
         <h3>이름과 나이를 입력</h3>
         <p>이름 : {member.name}</p>
         <p>나이 : {member.age}</p>

         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
         <Form.Control
            name="name"
            value={member.name}
            onChange={onMemberChangeHandler}
            aria-label="name"
            aria-describedby="basic-addon1"/>
         </InputGroup>

         <InputGroup className="mb-3">
         <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
         <Form.Control
            // 핸들러에서 name을 읽고 정보를 받음
            name="age"
            value={member.age}
            onChange={onMemberChangeHandler}
            aria-label="age"
            aria-describedby="basic-addon1"/>
         </InputGroup>
         <Button variant="success" onClick={addHandler}>멤버 추가</Button>{' '}
         <hr/>
         <h3>Member List</h3>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>age</th>
               </tr>
            </thead>
            <tbody>
               {/* 반복문 돌면서 화면 출력 */}
               {memberList.map((item, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{item.name}</td>
                     <td>{item.age}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </div>
   );
}

export default StateTest2;