import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MyTimer from './MyTimer';

function LifeCycleFunction(props) {
   const [count, setCount] = useState(0);
   const [count2, setCount2] = useState(0);
   const [showYN, setShowYN] = useState(true);

   const changeHandler = () => {
      setShowYN(!showYN);
   };

   // 제공되는 method 없는데 LifeCycle 조정하고 싶음
   useEffect(() => {
      console.log("load 시 1번 실행 (빈 의존 배열)");
   }, []);

   useEffect(() => {
      console.log("최초 rendering 될 때 마다 실행 (의존 배열 생략)");
   });
   
   useEffect(() => {
      console.log("최초 rendering 될 때, count 변경 시 실행");

   }, [count]);

   useEffect(() => {
      console.log("최초 rendering 될 때, count2 변경 시 실행");

   }, [count2]);

   useEffect(() => {
      console.log("최초 rendering 될 때, count, count2 변경 시 실행");

   }, [count, count2]);

   // 함수의 속성으로 들어가는게 아님, 변수인지 상수인지 표기
   // 함수는 변경되지 않으므로 상수로 표기했음
   const addHandler = () => {
      setCount(count + 1);
   };

   const addHandler2 = () => {
      setCount2(count2 - 1);
   };

   return (
      <div>
         <h1>함수의 LifeCycle : count = {count}, count2 = {count2}</h1>
         <Button onClick={addHandler}>1 증가</Button>{' '}
         <Button onClick={addHandler2}>1 감소</Button>{' '}

         <Button onClick={changeHandler}>시작 / 중지</Button>
         {showYN && <MyTimer/>}
      </div>
   );
}

export default LifeCycleFunction;