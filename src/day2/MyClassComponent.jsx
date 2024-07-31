import React, { Component } from 'react';
import "day1/external.css";
import { Button } from 'react-bootstrap';

// rcc
class MyClassComponent extends Component {
   // render 함수로 return
   render() {
      const inlineStyle = {border : "1px solid lightblue", color : "silver"};
      const {subject, score, children} = this.props;

      return (
         <div style={inlineStyle}>
            <h1 style={{backgroundColor : "lightpink"}}>ClassComponent</h1>
            <h2 className='{myStyle}'>외부 CSS 사용하기</h2>

            <p>속성 받기 subject : {this.props.subject}</p>
            <p>속성 받기 subject : {subject}</p>
            <p>속성 받기 score : {this.props.score}</p>
            <p>속성 받기 score : {score}</p>
            <p>속성 받기 children : {this.props.children}</p>
            <p>속성 받기 children : {children}</p>

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
         </div>
      );
   }
}

export default MyClassComponent;