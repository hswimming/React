import React, { useEffect, useState } from 'react';

function MyTimer(props) {
   const [currentTime, setCurrentTime] = useState("00:00:00");

   const now = () => {
      const date = new Date();
      const h = String(date.getHours()).padStart(2, "0");
      const m = String(date.getMinutes()).padStart(2, "0");
      const s = String(date.getSeconds()).padStart(2, "0");

      setCurrentTime(`${h}:${m}:${s}`); // currentTime 상태 변경
      console.log("타이머실행");
   };

   useEffect(() => {
      const timer = setTimeout(now, 1000); // 1초 후 now() 호출

      // useEffect 후에 뒷정리할 메서드를 return한다. (clean-up)
      // callback 함수
      return () => {
         clearTimeout(timer);
      };
   }, [currentTime]); // currentTime 상태값 변경 시 마다 실행 => setTimeout 객체 생성

   return (
      <div>
         <p>현재 시각 : {currentTime}</p>
      </div>
   );
}

export default MyTimer;