// rcfc

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import LifeCycleClass2 from './LifeCycleClass2';

class LifeCycleClass extends Component {
   constructor(props) {
      super(props);
      console.log("부모 constructor");

      this.state = {title : "초기값", childVisible : false};
   }
   
   componentDidMount() {
      console.log("부모 componentDidMount");
   }
   
   // 렌더링 여부 결정 (true : 렌더링 O, false : 렌더링 X)
   shouldComponentUpdate(nextProps, nextState) {
      console.log("부모 shouldComponentUpdate");

      // 가상 DOM이 갖고있는 상태값과 현재 변경된 상태값이 같은가?
      return this.state.title !== nextState.title || this.state.childVisible !== nextState.childVisible;
   }
   
   componentDidUpdate(prevProps, prevState) {
      console.log("부모 componentDidUpdate");
   }
   
   componentWillUnmount() {
      console.log("부모 componentWillUnmount");
   }

   titleChangeHandler = () => {
      this.setState({title : "타이틀 변경됨"});
   };

   childDisplayHandler = () => {
      // 원래 값의 상태 변경 (true -> false, false -> true)
      this.setState({childVisible : !this.state.childVisible});
   }

   render() {
      console.log("부모 render");

      return (
         <div>
            <h3>부모 title : {this.state.title}</h3>
            <Button onClick={() => {}}>title 값 변경하기1</Button>{' '}
            <Button onClick={this.titleChangeHandler}>title 값 변경하기2</Button>{' '}

            <Button onClick={this.childDisplayHandler}>자식 보여주기</Button>
            {this.state.childVisible && <LifeCycleClass2 title={this.state.title}/>}
         </div>
      );
   }
}

LifeCycleClass.propTypes = {

};

export default LifeCycleClass;