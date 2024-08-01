
// 할 일 아이템의 수정 및 삭제
function TodoItemComponent({data, updateTodo, deleteTodo}) {
   const {id, isDone, content, createDate} = data;

   // 수정
   const checkHandler = (event) => {
      console.log("수정 value", event.target.value);
      updateTodo(id, event.target.name, event.target.value);
   };

   // 삭제
   const deleteHandler = () => {
      deleteTodo(id);
   };

   return (
      <div className="todoItem">
         <div>
            <input
               type="checkbox"
               defaultChecked={isDone}
               name="isDone"
               onChange={checkHandler}
            />
         </div>
         <div>
            <input
               name="content"
               onChange={checkHandler}
               value={content}
            />
         </div>
         <div>
            {/* 그냥 찍으면 Long 타입임 / date 출력 시 주의! 객체 자체로 찍으면 오류 */}
            {new Date(createDate).toLocaleDateString()}
         </div>
         <div>
            <button onClick={deleteHandler}>삭제</button>
         </div>
      </div>
   );
}

export default TodoItemComponent;