import React from 'react';
import MyFunctionComponent, { MyFunctionComponent2 } from 'day2/MyFunctionComponent';
import MyClassComponent from 'day2/MyClassComponent';
import PropTypes from "prop-types";

function MyApp3(props) {
   const myData = {subject : "리액트 학습", score : 100};

   return (
      <div>
         <MyFunctionComponent subject="react1" score={99}> {/* 숫자로 사용 시 {} 작성 */}
            function1
         </MyFunctionComponent>
         <MyFunctionComponent subject="react1" score={98}>
            function2
         </MyFunctionComponent>
         <MyFunctionComponent {...myData}> {/* 구조적 문법 : subject, score 다 들어있음 */}
            function3
         </MyFunctionComponent>

         <MyFunctionComponent2 subject="react1" score={97}>
            속성 받기
         </MyFunctionComponent2>

         <MyClassComponent subject="react2" score={88}>
            class1
         </MyClassComponent>
         <MyClassComponent subject="react2" score={87}>
            class2
         </MyClassComponent>

         <MyFunctionComponent>function4</MyFunctionComponent>
         <MyClassComponent>class3</MyClassComponent>
      </div>
   );
}

// FunctionComponent defaultProps => 경고 (없어질 예정), JavaScript 처리 권장
// 값을 가져가지 않았을 때 default 값
MyFunctionComponent.defaultProps = {subject : "default subject1", score : 50};
MyClassComponent.defaultProps = {subject : "default subject2", score : 55};

// 타입 처리
MyFunctionComponent.propTypes = {
   subject:PropTypes.string,
   score:PropTypes.number.isRequired, // 반드시 있어야 함
};

MyClassComponent.propTypes = {
   subject:PropTypes.string,
   score:PropTypes.number,
};

export default MyApp3;