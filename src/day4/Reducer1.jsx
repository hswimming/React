// 상태 관리를 컴포넌트 외부에서 한다. => useReducer()
// 업무 로직 (상태 변경), 컴포넌트가 아닌 로직임 (소문자) => 외부 파일로 저장함

function reducer1(state, action) { // state : 상태, action : 뭘 할지
   switch(action.type) { // state : count 들어옴
      // 상태를 바꿔서 보내줌
      case "PLUS" : return state + 1;
      case "MINUS" : return state - 1;
      default : return state;
   }
}

export default reducer1;