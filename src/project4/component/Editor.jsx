import { emotionList, getFormattedDate } from 'project4/util';
import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Editor({initData, onSubmit}) {
   const [state, setState] = useState({
      date: getFormattedDate(new Date()),
      emotionId: 3,
      content: ""
   });

   // 날짜 변경
   const handleChangeDate = (event) => {
      setState({...state, date: event.target.value});
   };

   // 내용 변경
   const handleChangeContent = (event) => {
      setState({...state, content: event.target.value});
   };

   // 작성
   const handleSubmit = () => {
      onSubmit(state);
   };

   // 취소 버튼 클릭 시 뒤로 가기
   const navigate = useNavigate();

   const handleOnGoBack = () => {
      navigate(-1);
   };

   return (
      <div className="Editor">
         <div className="editor_section">
            <h4>오늘의 날짜</h4>
            <div className="input_wrapper">
               <input type="date" value={state.date} onChange={handleChangeDate}/>
            </div>

         </div>
         <div className="editor_section">
            <h4>오늘의 감정</h4>
            <div className="input_wrapper emotion_list_wrapper">
               {emotionList.map((item) => (
                  <img key={item.id} alt={`emotion${item.id}`} src={item.img}/>
               ))}
            </div>
         </div>

         <div className="editor_section">
            <h4>오늘의 일기</h4>
            <div className="input_wrapper">
               <textarea
                  placeholder="오늘은 어땠나요?"
                  value={state.content}
                  onChange={handleChangeContent}
               />
            </div>
         </div>

         <div className="editor_section bottom_section">
            <Button text={"취소"} onClick={handleOnGoBack}/>
            <Button text={"작성"} type={"positive"} onClick={handleSubmit}/>
         </div>
      </div>
   );
}

export default Editor;