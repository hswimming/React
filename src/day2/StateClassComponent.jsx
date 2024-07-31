// rcfc

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class StateClassComponent extends Component {
   constructor(props) {
      // 코드를 작성하려면 반드시 부모를 호출해야 한다.
      super(props);
      console.log("StateClassComponent constructor");

      // 상태관리
      this.state = {
         count : 0, 
         message : "count 하기",
         f2 : () => { console.log("f2() : state 안에 있는 화살표 함수", this.state.message); }, // 화살표 함수는 자동으로 bind
         f3 : function() {
            console.log("f3() : state 안에 있는 선언적 함수", this.state.message); // this => window (default)
         }
      }; // set 가능

      this.f1 = () => { console.log("f1() : 생성자(constructor) 속성으로 만든 state 밖에 있는 함수", this.state.message); };

      this.f6 = function() {
         console.log("f6() : 테스트");
      };

      // 윈도우에는 state 없음, this가 class라는 사실을 알려줘야 함
      // => state에 있는 선언적 함수에 this가 이 객체임을 알림
      this.state.f3 = this.state.f3.bind(this); // 클래스 안에서 썼기 때문에 this => class가 됨
   }

   f4() {
      console.log("f4() : state 밖에 있는 선언적 함수", this.state.message);
   }

   f5 = () => {
      console.log("f5() : state 밖에 있는 화살표 함수", this.state.message);
   }

   // constructor이므로 앞에 function 작성 X
   clickCountHandler = (e) => {
      // console.log(e.target);
      if(e.target.innerHTML === "더하기") {
         this.setState({count : this.state.count + 1, message : "더하기"});
         
      } else {
         this.setState({count : this.state.count - 1, message : "빼기"});
      }
   };

   render() {
      // 따로 빼서 작성하면 편리
      const {count, message} = this.state;

      return (
         <div>
            <h1>StateClassComponent</h1>
            <p>현재 count : {this.state.count}</p>
            <p>현재 count : {count}</p>
            <p>현재 message : {this.state.message}</p>
            <p>현재 message : {message}</p>
            <Button onClick={this.clickCountHandler}>더하기</Button> {/* 클래스 요소로 작성 */}
            <Button onClick={this.clickCountHandler}>빼기</Button>
            <hr/>
            <h3>함수 호출</h3>
            {this.f1()}
            {this.state.f2()}
            {this.state.f3()}
            {this.f4()}
            {this.f5()}
            {this.f6()}
         </div>
      );
   }
}

export default StateClassComponent;