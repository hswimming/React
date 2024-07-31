import React from 'react';

// rsf
// HTML로 보이지만 실제 HTML은 아님
function MyFunctionComponent(props2) { // props 변수명 고정 아님
   const inlineStyle = {border : "1px solid green", color : "skyblue"};
   const {subject, score} = props2; // {subject : "aa", score : 99}

   return (
      <div style={inlineStyle}>
         <h1 style={{color : "gray"}}>FunctionComponent</h1>
         <p>속성 받기 subject : {props2.subject}</p>
         <p>추출해서 사용 subject : {subject}</p>
         <p>속성 받기 score : {props2.score}</p>
         <p>추출해서 사용 score : {score}</p>
         <p>tag 사이의 내용 children : {props2.children}</p>
      </div>
   );
}

// 처음부터 속성을 파라미터로 받아서 사용
export function MyFunctionComponent2({subject, score, children}) {
   const inlineStyle = {border : "1px solid green", color : "skyblue"};

   return (
      <div style={inlineStyle}>
         <h1 style={{color : "gray"}}>FunctionComponent2</h1>
         <p>속성 받기 subject : {subject}</p>
         <p>속성 받기 score : {score}</p>
         <p>속성 받기 children : {children}</p>
      </div>
   );
}

export default MyFunctionComponent;