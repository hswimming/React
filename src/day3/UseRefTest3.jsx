import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import InputStudent from 'day3/InputStudent';
import DisplayStudentList from 'day3/DisplayStudentList';

const initMember = {mid : 1, name : "수영", age : 29, email : "test@mail.com"}; // 초기 member
const initList = [
   initMember, 
   {mid : 2, name : "보리", age : 10, email : "bori@mail.com"},
   {mid : 3, name : "아롱", age : 15, email : "arong@mail.com"}
];

function UseRefTest3(props) {
   // 1. useRef() 사용 : DOM 선택할때
   const nameInput1 = useRef(); // document.getElementById("") 역할
   const nameInput2 = useRef();

   // 2. useRef() 사용 : 다시 렌더링되어도 초기화되지 않는 변수가 필요할 때
   const memberId = useRef(4); // 4번부터 시작

   const [member, setMember] = useState(initMember);
   const [memberList, setMemberList] = useState(initList);

   const clickHandle1 = () => {
      nameInput1.current.focus();
   };

   const clickHandle2 = () => {
      nameInput2.current.focus();
   };

   const changeHandler = (e) => {
      // 원래 멤버는 두고 들어온 속성 값만 변경
      setMember({...member, [e.target.name] : e.target.value});
   };

   const addHandler = () => {
      // 이렇게 하면 setter가 비동기라서 안됨!!
      /*
      setMember({...member, mid : memberId.current}); // memberId 현재 값
      memberId.current += 1; // 다음 번호
      setMemberList([...memberList, member]);
      */

      const newMember = {...member, mid : memberId.current}; // memberId 현재 값
      setMember(newMember);
      memberId.current += 1; // 다음 번호
      setMemberList([...memberList, newMember]); // 리스트에 들어가기 전에 memberId 필요
   };

   useEffect(() => {
      console.log("memberList 변경 확인 : " + memberList);

   }, [memberList]);

   return (
      <div>
         <input ref={nameInput1}/>
         <input ref={nameInput2}/>
         <Button onClick={clickHandle1}>이동 1</Button>{' '}
         <Button onClick={clickHandle2}>이동 2</Button>

         {/*
         이름 : <input name="name" onChange={changeHandler}/>
         나이 : <input name="age" onChange={changeHandler}/>
         메일 : <input name="email" onChange={changeHandler}/>
         */}

         <InputStudent student={member} changeHandler={changeHandler}/>
         <Button onClick={addHandler}>추가</Button>
         <DisplayStudentList studentList={memberList}/>

         {/*
         <ul>
            {memberList.map((item, index) => (
               <li key={index}>
                  {item.mid} - {item.name} - {item.age} - {item.email}
               </li>
            ))}
         </ul>
         */}
      </div>
   );
}

export default UseRefTest3;