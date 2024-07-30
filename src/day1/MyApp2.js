import React from 'react';
import ExportTest, {constTest, varTest, Func1, Func2} from 'day1/ExportTest'; // default 외에도 사용
import "day1/external.css"; // 외부 css import

// 함수형 Component : 컴포넌트 이름은 반드시 대문자
function MyApp2(props) {
   var myname = "리엑트JS";
   const score = 99;

   // 이 부분의 값은 JSX에서 읽어서 출력 시 display 되지 않음
   let score2 = null;
   let score3 = undefined;
   let score4 = false;

   const student = {name : "황수영", major : "실내건축"};

   const hobbyArr = ["Sports", "Music", "Movie"];
   const hobbyDisplay = hobbyArr.map((item, index) => <li key={index}>{item}</li>); // 이 값이 리턴

   // import 한 값, 함수 사용하기
   console.log(constTest);
   console.log(varTest);
   // console.log(f1());
   // console.log(f2());

   // CSS : Object 형태로 작성
   const inlineStyle = {border : "3px dotted orange", color : "skyblue"};

   return (
      <div style={inlineStyle}>
         <h1 style={{backgroundColor : "silver"}}>함수형 Component</h1> {/* inlineStyle 사용 시 Object 형태로 작성 */}
         {/* import 연습, component 사용 시 대문자로 시작 */}
         <p className="myStyle">constTest : {constTest}</p> {/* 외부 css 연결 시 className 작성 */}
         <p className="myStyle2">varTest : {varTest}</p> {/* 외부 css 연결 시 className 작성 */}
         <ExportTest/>
         <Func1/>
         <Func2/>

         <p>이름은 {myname}</p>
         <p>점수는 {score}</p>
         <p>
            student 정보 : {student.name} ---- {student.major} {/* 속성값으로 작성하지 않으면 오류 */}
         </p>
         <p>
            점수2는 {score2} {score2 == null ? "값 없음" : score2} {""}
         </p>
         <p>
            점수3는 {score3} {score3 === undefined ? "값 없음" : score3}
         </p>
         <p>
            점수4는 {score4} {score4 ? score4 : "값 없음"}
         </p>
         {/* <p>주석</p> */}
         <div>{hobbyArr}</div>
         <div>
            {/* 반복문 돌면서 값이 바뀔 경우 (값이 여러개)
               원래 있던 값은 두고 수정된 부분이 원래 값을 찾을 수 있어야 함 (중간 값이 변경될 수도 있음)
                => 성능을 위해 키를 주는 게 좋음 */}
            <ul>
               {/* 배열이 변형돼서 나와야 함 => map 사용 */}
               {hobbyArr.map((item, index) => (
                  <li key={index}>{item}</li>
               ))}
            </ul>
            <hr/>
            {/* 위 처럼 작성하는 것 보다 관리가 편함 */}
            <ul>{hobbyDisplay}</ul>
         </div>
      </div>
   );
}

export default MyApp2;