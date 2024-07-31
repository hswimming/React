import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// Component => tag로 사용
function StateFunctionComponent(props) {
   // 상태값을 변경하기 위해 반드시 setter 이용한다. (직접 접근 X)
   // useState() 값이 초기 값으로 할당된다.
   const [light, setLight] = useState("⭐ off ⭐");
   const [light2, setLight2] = useState(false);

   const [count, setCount] = useState(0);

   // 기능 로직
   const clickHandler = () => {
      // (불가능) 바뀌었다고 하더라도 상태 관리를 리액트가 하지 않음
      // light = light === "on" ? "off" : "on";

      setLight(light === "⭐ on ⭐" ? "⭐ off ⭐" : "⭐ on ⭐");
   };

   // 기능 로직
   const clickHandler2 = () => {
      setLight2(!light2);
   };

   /*
   const clickAddHandler = () => {
      setCount(count + 1); // count = count + 1
   };
   
   const clickMinusHandler = () => {
      setCount(count - 1); // count = count - 1
   };
   */

   // 로직 한번에 처리
   const clickCountHandler = (e) => {
      // console.log(e.target);
      if(e.target.innerHTML === "증가") {
         setCount(count + 1);
         
      } else {
         setCount(count - 1);
      }
   };

   return (
      <div>
         <p>현재 상태값 : {light}</p>
         <p>현재 상태값 : {light2 ?  "⭐ 커짐 ⭐" : "⭐ 꺼짐 ⭐"}</p>
         <Button onClick={clickHandler}>상태 변경하기</Button> {/* 리액트 버튼 */}
         <Button onClick={clickHandler2}>상태 변경하기2</Button>

         <p>현재 count 값 : {count}</p>
         {/* <Button onClick={clickAddHandler}>증가</Button> */}
         {/* <Button onClick={clickMinusHandler}>감소</Button> */}
         <Button onClick={clickCountHandler}>증가</Button>
         <Button onClick={clickCountHandler}>감소</Button>
      </div>
   );
}

export default StateFunctionComponent;