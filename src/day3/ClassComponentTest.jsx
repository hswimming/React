import React, { Component } from 'react';

class ClassComponentTest extends Component {
   constructor(props) {
      super(props);

      this.state = {message : "", color : ""};
   }
   
   enterListener = (e) => {
      console.log(e.target.innerText);
   };
   
   leaveListener = (e) => {
      console.log(e.target.innerText);
   };

   colorListener = (e) => {
      // 상태 변경
      this.setState({message : e.target.innerText + " 변경", color : e.target.innerText,
      }, // setter 상태 확인 : callback 함수 사용
         () => {
            console.log("set 후 color 값 : " + this.state.color);
         }
      );

      // setter : 비동기 => 콘솔에 이전 값을 출력함
      // console.log("set 후 color 값 : " + this.state.color);
   };

   render() {
      var myStyle = {color : this.state.color};

      return (
         <div>
            <button onClick={this.enterListener}>입장</button>
            <button onClick={this.leaveListener}>퇴장</button>
            <button onClick={this.colorListener}>BLUE</button>
            <button onClick={this.colorListener}>RED</button>
            <h1 style={myStyle}>{this.state.message}</h1>
            <h1>{this.state.color}</h1>
         </div>
      );
   }
}

export default ClassComponentTest;