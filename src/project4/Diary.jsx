import React from 'react';
import { useParams } from 'react-router-dom';

function Diary(props) {
   // URL 파라미터 값 불러오기
   const {id} = useParams();

   return (
      <div>
         <div>Diary Page</div>
         <div>{id}번 일기</div>
      </div>
   );
}

export default Diary;