import React from 'react';

function EnvTest(props) {
   console.log("PUBLIC_URL : " + process.env.PUBLIC_URL); // default : 공백
   console.log("REACT_APP_CHANNEL_ID : " + process.env.REACT_APP_CHANNEL_ID); // 환경변수 접근 방법
   console.log("REACT_APP_CHANNEL_NAME : " + process.env.REACT_APP_CHANNEL_NAME);
   console.log("REACT_APP_IMAGE_PATH : " + process.env.REACT_APP_IMAGE_PATH);

   return (
      <div>
         <h1>환경변수 사용하기</h1>
         <p>서버 재시작 필요</p>
      </div>
   );
}

export default EnvTest;