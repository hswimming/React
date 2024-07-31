import React, { useState } from 'react';

// useState는 함수형 컴포넌트에서 상태관리를 하기 위한 Hook
function StateTest1(props) {
   const [color, setColor] = useState("skyblue");
   const [message, setMessage] = useState("버튼을 누르면 색깔이 변경됩니다.");
   const [mystyle, setMystyle] = useState({color : "lightpink", border : "1px solid gray"});

   const handleColorChange = (e) => {
      setColor(e.target.innerText);
      setMessage(e.target.innerText + "버튼 누름");
      setMystyle({
         color : `${e.target.innerText}`,
         border : `1px solid ${e.target.innerText}`,
      });
   };

   return (
      <div>
         <button onClick={handleColorChange}>RED</button>
            <button onClick={handleColorChange}>GREEN</button>
            <button onClick={handleColorChange}>BLUE</button>
            <h1 style={{color : color}}>{message}</h1>
            <h1 style={{color}}>{message}</h1>
            <h1 style={mystyle}>{message}</h1>
      </div>
   );
}

export default StateTest1;