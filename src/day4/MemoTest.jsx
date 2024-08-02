import React, { useEffect, useMemo, useState } from 'react';

function MemoTest(props) {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   const expensiveCalculation = (num) => {
      console.log("Calculating...");

      for (let i = 0; i < 1000000000; i++) {
         num += 1;
      }
      return num;
   };

   // 함수 호출...함수를 수행하는데 시간이 오래 걸린다. (문제점)
   // const calculation = expensiveCalculation(count);

   // 해결 : 의존 배열 값이 변결 될 때만 재계산 하고
   // 다른 변화에 의해 재 렌더링 될 때는 기존값을 기억했다가 재사용
   const calculation = useMemo(() => expensiveCalculation(count), [count]);
   
   const [myname, setMyname] = useState("");

   // count가 들어가면 다시 부르는게 맞음, 하지만 이 함수는
   // 숫자를 바꾼 게 아니라 입력하는거라 계산하면 안됨
   const changeHandler = (e) => {
      setMyname(e.target.value);
   };

   // 성능 최적화를 위해 사용
   // 값 저장 : useMemo()
   // 컴포넌트 저장 :  React.memo()
   // 함수 저장 : useCallback()
   useEffect(() => {
      console.log("changeHandler 변경됨");
   }, [myname]);

   return (
      <div>
         Count: {count}{' '}
         <button className="btn btn-success" onClick={increment}>+</button>{' '}
         <input onChange={changeHandler}></input>
         <p>입력 값 정보 : {myname}</p>
         <h2>Expensive Calculation: {calculation}</h2>
      </div>
   );
}

export default MemoTest;