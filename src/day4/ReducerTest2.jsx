import React, { useCallback, useReducer, useRef } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const initMember = {
   // 새로 만들 때 초기화 시키는 값
   member : { mid : 0, name : "", phone : "", active : false },

   memberList : [
      { mid : 1, name : "A", phone : "1234", active : false },
      { mid : 2, name : "B", phone : "5678", active : false },
   ],
};

function reducer2(state, action) {
   // ...state => const initMember
   switch (action.type) {
      case "CHANGE_INPUT" :
         return {
            ...state,
            member : { ...state.member, [action.name] : action.value },
         };

      case "CREATE_MEMBER" :
         return {
            member : initMember.member, // clear
            memberList : state.memberList.concat(action.member), // [...state.memberList, action.member]
         };

      case "TOGGLE_MEMBER" : // 1건 수정
         return {
            ...state,
            memberList : state.memberList.map((mem) =>
               mem.mid === action.mid ? { ...mem, active : !mem.active } : mem
            ),
         };

      case "REMOVE_MEMBER" :
         // == : 값 비교, === : 값, 타입 비교
         // 타입까지 확인해서 이 코드에서는 다르기 때문에 삭제가 안됨
         return {
            ...state,
            memberList : state.memberList.filter((mem) => mem.mid != action.mid),
         };

      default :
         return state;
   }
}

const ReducerTest2 = () => {
   // state : 외부에서 상태 관리를 한다. (useReducer 이용)
   // {member : {}, memberList : [{}, {}]}
   // 호출은 dispatch를 이용한다. 전달되는 값은 2번째 argument인 action에 들어간다.
   const [state, dispatch] = useReducer(reducer2, initMember); // 초기값 initMember
   const mid = useRef(3);
   const { memberList } = state;
   const { name, phone } = state.member;

   // 한번만 할당
   // 하나의 칼럼 값을 입력
   const changeHandler = useCallback(
      // dispatch로 호출한 값이 action으로 들어감
      (e) =>
         dispatch({
            type : "CHANGE_INPUT",
            name : e.target.name,
            value : e.target.value,
         }),
      []
   ); // member id는 만들어지지 않은 상태

   // 한 건의 Member를 베열에 Add
   const addHandle = (e) => {
      // 만들어진 member에 id 추가
      const newMember = { name, phone, mid : mid.current };

      dispatch({ type : "CREATE_MEMBER", member : newMember });
      mid.current++;
   };

   const removeHandler = useCallback((mid) => {
      dispatch({ type : "REMOVE_MEMBER", mid : mid });
   }, []);

   const updateHandler = useCallback((mid) => {
      dispatch({ type : "TOGGLE_MEMBER", mid }); // 이름이 동일해서 mid : mid 생략
   }, []);

   return (
      <div>
         <FormComponent
            changeHandler={changeHandler}
            addHandle={addHandle}
         ></FormComponent>
         <br/>
         <TableComponent
            removeHandler={removeHandler}
            updateHandler={updateHandler}
            memberList={memberList}
         ></TableComponent>
      </div>
   );
};

export default ReducerTest2;