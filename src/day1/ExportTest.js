import React from 'react';

export const constTest = 100; // 상수
export var varTest = "문자"; // 변수
export function Func1() { return <p>함수</p> }
export const Func2 = function () { return <p>함수2</p> } // 함수도 상수, 변수 가능

// export default는 오직 하나만 가능
export default function ExportTest(props) {
   return (
      <div>
         <p>ExportTest function (default export)</p>
      </div>
   );
}

// 각각 export 예약어를 사용할 수도 있고, 한꺼번에 작성도 가능하다.
// export default ExportTest;
// export {ExportTest as default, constTest, varTest, Func1, Func2};