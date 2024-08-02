import reducer1 from 'day4/Reducer1';
import { useCallback, useReducer } from 'react';
import { Button } from 'react-bootstrap';

// 상태 관리를 컴포넌트 외부에서 한다. => useReducer()
// 업무 로직 (상태 변경), 컴포넌트가 아닌 로직임 (소문자) => 외부 파일로 저장함
/*
function reducer1(state, action) { // state : 상태, action : 뭘 할지
   switch(action.type) { // state : count 들어옴
      // 상태를 바꿔서 보내줌
      case "PLUS" : return state + 1;
      case "MINUS" : return state - 1;
      default : return state;
   }
}
*/

function ReducerTest(props) {
   // 상태 관리를 컴포넌트 내에서 직접 한다. => useState()
   // const [count, setCount] = useState(0);
   
   // 상태 관리를 컴포넌트 외부에서 한다. => useReducer()
   // dispatch : 외부의 로직을 수행할 함수
   const [count, dispatch] = useReducer(reducer1, 0);

   const clickHandler = useCallback ((e) => {
      if(e.target.innerText === "증가") {
         // setCount(count + 1);
         dispatch({type : "PLUS"}); // 객체가 들어옴, 타입 정해주기
      } else {
         // setCount(count - 1);
         dispatch({type : "MINUS"}); // 객체가 들어옴, 타입 정해주기
      }
      // 경고 무시하기 위해 추가
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [count]);

   return (
      <div>
         <h2>현재 count : {count}</h2>
         <Button onClick={clickHandler}>증가</Button>{' '}
         <Button onClick={clickHandler}>감소</Button>
      </div>
   );
}

export default ReducerTest;