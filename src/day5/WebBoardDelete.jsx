import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function WebBoardDelete(props) {
   const location = useLocation();
   
   const bno = location.state.bno; // 넘어온 값 읽기
   console.log(bno);

   const navi = useNavigate();

   useEffect(() => {
      call(`http://localhost:9999/api/board/delete/${bno}`, "DELETE", null)
         .then((response) => {
            console.log(response);
            navi("/webboard/lisr");
         });
   }, []);

   return (
      <div>
         <p>Board Delete</p>
      </div>
   );
}

export default WebBoardDelete;