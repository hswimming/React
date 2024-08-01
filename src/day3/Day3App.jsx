import { useEffect, useState } from 'react';
import ControllerButton from './ControllerButton';
import DisplayCount from './DisplayCount';

function Day3App(props) {
   // data 상태관리 => 값 변경 시 자동으로 UI 적용
   // 함수형 컴포넌트에서 상태관리 => useState() 사용
   const [count, setCount] = useState(0);

   const clickHandler = (e) => {
      // target의 innerText 가져오기
      // 의미 : count = count + Number(e.target.innerText) => 상태관리 되지 않음
      setCount(count + Number(e.target.innerText));

      // setter : 비동기 => 세팅은 하는데 count 먼저 출력 (setter 뒤에 출력하면 현재 값을 볼 수 없음)
      // console.log("count = " + count); // 옛날 값 (좀 전의 값)
   };

   const clickHandler2 = (value) => {
      // 값을 받아서 계산
      setCount(count + value);
   };

   // life cycle 관리할때 사용되는 Hook
   useEffect(() => {
      console.log("count 변경되면 수행" + count);
      
   }, [count]); // count가 바꼈을때 감지해서 동작

   return (
      <div>
         <h1>Count App : {count}</h1>
         <DisplayCount count={count}></DisplayCount>
         <ControllerButton clickHandler={clickHandler} clickHandler2={clickHandler2}></ControllerButton>
      </div>
   );
}

export default Day3App;