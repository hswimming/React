import React from "react";

const Card = ({ item, handleClick }) => {
  console.log(`${item.userid} - ${item.username}`);

  return (
    <>
      <button onClick={handleClick}> 하이</button>
      <p>
        아이디: {item.userid} 이름: {item.username}
      </p>
    </>
  );
};

// ...매번 Rendering
// export default Card;

// 바뀐부분만 렌더링...그러나 키가 index이면 매번 rendering
export default React.memo(Card);