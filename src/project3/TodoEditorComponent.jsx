import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { TodoContext } from './todoContext';

// 새로운 할 일 아이템 생성
function TodoEditorComponent() {
   const { addTodo } = useContext(TodoContext); // 공유 공간에서 필요한 값만 빼오기
   const [content, setContent] = useState("");

   // focus 이동을 위해 선언, useRef가 DOM 처리를 위해 사용
   const inputRef = useRef();

   const changeHandle = (event) => {
      setContent(event.target.value);
   };

   const addHandle = () => {
      // 입력된 내용이 없으면 focus 이동하고 addTodo() 호출 X
      if(!content) {
         inputRef.current.focus();
         return;
      }

      addTodo(content);
      setContent("");
   };

   const onKeyDown = (event) => {
      // 키를 누를때 마다 발생, enter키를 눌렀을때 추가 버튼 로직을 수행
      if(event.keyCode === 13) {
         addHandle(); // 함수 호출
      }
   };

   /******************** 복습 ********************/
   var score = 100;  // 다시 rendering 시 초기화 된다.
   const screRef = useRef(100); // 다시 rendering 시 초기화 되지 않고 본래 값 유지
   const addHandler = () => {
      score++;
      screRef.current++;
      console.log(score, screRef);
   };

   // useEffect : Component life cycle 관리
   // 최초 1번만 하고 싶은건지, 바뀔 때 마다 하고 싶은건지...
   useEffect(() => {
      console.log("load 시 1회");
   }, []);
   
   useEffect(() => {
      console.log("rendering 될 때 마다");
   });
   
   useEffect(() => {
      console.log("content 변경 될 때 마다");
   }, [content]);

   /*********************************************/

   return (
      <div className="todoEditor">
         <Button onClick={addHandler}>증가</Button>
         <h4>새로운 to do 작성하기</h4>
         <div>
            <input 
               ref={inputRef} 
               value={content}
               onChange={changeHandle}
               onKeyDown={onKeyDown}
               placeholder="새로운 to do..."
            />
            <Button onClick={addHandle}>추가</Button>
         </div>
      </div>
   );
}

export default TodoEditorComponent;