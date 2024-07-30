// component 사용 => module 파일은 대문자로 시작해야 한다.

import React from 'react';
import Header from 'day1/Header'; // 절대 경로 사용 시 현재 밑이라고 작성
import Menu from 'day1/Menu';
import Section from 'day1/Section';

// Component : 재사용 가능, 반드시 대문자로 시작, 외부에서 사용하려면 export
function MyApp1(props) {
   // JSX(JavaScript XML) : 반드시 root 1개, 반드시 닫는 tag 필요
   return (
      <div>
         <h1>Function Component1</h1>
         <Header/>
         <Menu/>
         <Menu/>
         <Section/>
         <hr/>
      </div>
   );
}

export default MyApp1; // {} 하지 않아도 사용 가능