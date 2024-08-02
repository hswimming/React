import HeaderComponent from "project3/HeaderComponent";
import TodoEditorComponent from "project3/TodoEditorComponent";
import TodoListComponent from "project3/TodoListComponent";
import "project3/project2.css";
import React, { useEffect, useRef, useState } from "react";
import { TodoContext } from "project3/todoContext";

// default Data
const initTodo = [
   {
      id : 0, 
      isDone : false,
      content : "React 공부하기",
      createDate : new Date().getTime()
   },
   {
      id : 1,
      isDone : false,
      content : "Spring 공부하기",
      createDate : new Date().getTime()
   }
];

// 전역 공간 생성
// export const TodoContext = React.createContext();

function AppComponent(props) {
   // 배열 [{}, {}]
   const [todo, setTodo] = useState(initTodo);
   const todoId = useRef(2); // id 값으로 사용하기 위해 초기값 부여
   
   // 추가
   const addTodo = (event) => {
      const newTodo = {
         id : todoId.current, 
         isDone : false,
         content : event, // 넘어오는 변수명이 content일 경우 키, 값 이름이 동일하므로 생략도 가능함
         createDate : new Date().getTime()
      };

      setTodo([...todo, newTodo]);
      todoId.current += 1;
   };

   // 성능 최적화를 위해 사용
   // 값 저장 : useMemo()
   // 컴포넌트 저장 :  React.memo()
   // 함수 저장 : useCallback()
   /*
   // 추가
   const addTodo = useCallback ((event) => {
      const newTodo = {
         id : todoId.current, 
         isDone : false,
         content : event, // 넘어오는 변수명이 content일 경우 키, 값 이름이 동일하므로 생략도 가능함
         createDate : new Date().getTime()
      };

      setTodo([...todo, newTodo]);
      todoId.current += 1;
   }, [todo]);

   useEffect(() => {
      console.log("addTodo 함수가 재정의 됨 (다시 할당되는지 확인용)");
   }, [addTodo]);
   */

   // 수정
   const updateTodo = (targetId, column, value) => {
      // [{id : 1}, {id : 2}, {id : 3, content : "B", isDone : true}]
      console.log("수정 targetId", targetId);

      setTodo(
         todo.map((item) => {
            // 체크 박스 상태 변경
            if(item.id === targetId && column === "isDone") {
               return {...item, isDone : !item.isDone};
            }

            if(item.id === targetId && column === "content") {
               return {...item, content : value};

            } else {
               return item;
            }
         })
      );
   };

   // 삭제
   const deleteTodo = (targetId) => {
      console.log("삭제 targetId", targetId);
      setTodo(todo.filter((item) => item.id !== targetId));
   };

   // 성능 최적화를 위해 사용
   // 값 저장 : useMemo()
   // 컴포넌트 저장 :  React.memo()
   // 함수 저장 : useCallback()
   /*
   // 삭제
   const deleteTodo = useCallback ((targetId) => {
      console.log("삭제 targetId", targetId);
      setTodo(todo.filter((item) => item.id !== targetId));
   }, [todo]);
   */

   // 최종 to do list
   useEffect(() => {
      console.log("최종 to do list", todo);

   }, [todo]);

   return (
      <div className="App">
         {/* 공유 공간에 저장, 필요할때 가져다 쓰는 것, 주는 게 아님 */}
         {/* 오브젝트 형태, 키 : 값, 이름 같으면 생략해서 작성 */}
         <TodoContext.Provider value={{addTodo, todo, updateTodo, deleteTodo}}>
            <HeaderComponent/>
            <TodoEditorComponent/>
            <TodoListComponent/>
         </TodoContext.Provider>
      </div>
   );
}

export default AppComponent;