import React, { useState } from 'react';
import TodoItemComponent from './TodoItemComponent';

// 검색에 따라 필터링된 할 일 아이템 렌더링
function TodoListComponent({todo, updateTodo, deleteTodo}) {
   const [search, setSearch] = useState("");

   const changeHandler = (event) => {
      console.log("검색 value", event.target.value);
      setSearch(event.target.value);
   };

   // 검색
   const searchTodo = () => {
      // filter() : 조건에 맞는것만 (true)이면 return => [{}, {}]
      return search === "" ? todo : todo.filter(
         // 소문자로 변경해서 확인
         (item) => item.content.toLowerCase().includes(search.toLowerCase())
      );
   };

   return (
      <div className="todoList">
         <h4>to do list</h4>
         <input 
            value={search}
            onChange={changeHandler}
            placeholder="검색어를 입력하세요."
         />
         <div>
            {/* {todo.map((item) => (
               <TodoItemComponent
                  key={item.id}
                  id={item.id}
                  data={item}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
               />
            ))} */}

            {searchTodo().map((item) => (
               <TodoItemComponent
                  key={item.id}
                  id={item.id}
                  data={item}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
               />
            ))}
         </div>
      </div>
   );
}

export default TodoListComponent;