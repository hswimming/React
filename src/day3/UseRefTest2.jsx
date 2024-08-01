import React from 'react';
import { Button } from 'react-bootstrap';

function UseRefTest2(props) {
   // 상태관리 하지 않고 직접 변수 사용
   // => 값이 유지되지 않고 렌더링 될 때 마다 100 부터 다시 수행함
   var score = 100;

   const clickHandler = () => {
      score = score + 1;
      console.log(score);
   };

   return (
      <div>
         <h1>자식</h1>
         <Button onClick={clickHandler}>점수 변경</Button>
      </div>
   );
}

export default UseRefTest2;