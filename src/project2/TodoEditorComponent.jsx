import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

// 새로운 할 일 아이템 생성
function TodoEditorComponent({addTodo}) {
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

   return (
      <div className="todoEditor">
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