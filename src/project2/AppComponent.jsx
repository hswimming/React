import HeaderComponent from "project2/HeaderComponent";
import TodoEditorComponent from "project2/TodoEditorComponent";
import TodoListComponent from "project2/TodoListComponent";
import "project2/project2.css";
import { useEffect, useRef, useState } from "react";

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
         <HeaderComponent/>
         <TodoEditorComponent addTodo={addTodo}/>
         <TodoListComponent todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      </div>
   );
}

export default AppComponent;