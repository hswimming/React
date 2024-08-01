import React from 'react';

function ControllerButton({clickHandler, clickHandler2}) {
   return (
      <div>
         {/* 받은 핸들러 직접 넣기 */}
         <button onClick={clickHandler}>+1</button>
         <button onClick={clickHandler}>+10</button>
         <button onClick={clickHandler}>+100</button>
         <button onClick={clickHandler}>-1</button>
         <button onClick={clickHandler}>-10</button>
         <button onClick={clickHandler}>-100</button>

         <button onClick={() => clickHandler2(-1000)}>함수 호출</button>
         <button onClick={() => alert("aa")}>함수 직접 구현</button>
      </div>
   );
}

export default ControllerButton;