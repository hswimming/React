// 부모가 자식에게 Property 보내면 받기

import React from 'react';

function PropsComponentTest(props) {
   // props => {subject : [], scoer : []}
   var {subject} = props;
   subject = subject === undefined ? ["A" , "B"] : subject; // 값이 들어오지 않았을 때 default 값

   return (
      <div>
         <h1>배열로 들어온 속성 값 받기</h1>
         <h2>{props.children}</h2>
         <ul>
            {subject && subject.map((item, index) => ( // 없으면 수행 X, 있으면 뒤 수행 (현재 default 값 있음)
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   );
}

export default PropsComponentTest;