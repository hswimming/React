import React from "react";

const Light = ({ room, on }) => {
   console.log(room, on);
   return <div>{on ? "💡" : "⬛"}</div>;
};

// 컴포넌트 렌더링(메모) 방법 => 성능 향상
// Component가 변경되지 않았다면 재 rendering 하지 않음
export default React.memo(Light);

export function Light2({ room, on }) {
   console.log(room, on);
   return <div>{on ? "💡" : "⬛"}</div>;
};