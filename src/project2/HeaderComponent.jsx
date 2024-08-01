import React from 'react';

// 오늘의 날짜 표시
function HeaderComponent() {
   // const date = new Date().toLocaleDateString();
   const date = new Date().toISOString().split("T")[0];

   return (
      <div className="Header">
         <h3>오늘은 📅</h3>
         <h1>{date}</h1>
      </div>
   );
}

export default HeaderComponent;