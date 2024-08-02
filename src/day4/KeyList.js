import React, { useCallback, useEffect, useRef, useState } from "react";
import Card from "./Card";

// useMemo 사용이 안됨...
const DUMMY_ARR = [
  { userid: 1, username: "swimming1" },
  { userid: 2, username: "swimming2" },
];

const KeyList = () => {
  const [arr, setArr] = useState(DUMMY_ARR);
  const nextUserId = useRef(3);
  
  // 함수 메모, 최초 1회만 함수를 할당 (다시 만들어지지 않고 기억)
  // useCallback 사용하지 않으면 render 될 때 마다 다시 함수를 호출
  const handleClick = useCallback(() => {
    console.log("handleClick~~~");
  }, []); // 의존 배열이 비어있다면 최초에 한번만 수행

  // const handleClick = () => {
  //   console.log("handleClick~~");
  // };

  // Test 용도, handleClick method 변경 여부를 확인하기 위해 추가
  useEffect(() => {
    console.log("handleClick method 다시 만들어짐");
  }, [handleClick]);

  return (
    <div>
      <h2>key가 index일 때와 유일한 값일 때의 차이</h2>
      {/* key를 index로 => 유일한 값이 아니기 때문에 사용하면 값을 찾지 못함 */}
      {arr.map((item, index) => (
        <Card key={item.userid} item={item} handleClick={handleClick}></Card>
      ))}
      <button
        onClick={() => {
          setArr([
            {
              userid: `${nextUserId.current}`,
              username: `Hi~ ${nextUserId.current}`,
            },
            ...arr,
          ]);
          nextUserId.current += 1;
        }}
      >
      앞부분에 아이템 추가, Reindexing 발생
      </button>
    </div>
  );
};

export default KeyList;