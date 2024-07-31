import React 
, { useState }from 'react';

function StateTest3(props) {
   const [student, setStudent] = useState({
      username : "보리", 
      useremail : "test@com", 
      userphone : "010-1234-5678"
   });

   // ...student => student 전부 가져옴, 기존것을 복사하고 변경한 값으로 수정
   const studentChangeHandler = (event) => {
      setStudent({...student, [event.target.name] : event.target.value});
   };

   return (
      <div>
         <p>이름 : {student.username}</p>
         <p>email : {student.useremail}</p>
         <p>phone : {student.userphone}</p>

         이름 : 
         <input name="username" onChange={studentChangeHandler} value={student.username}/>
         email : 
         <input name="useremail" onChange={studentChangeHandler} value={student.useremail}/>
         phone : 
         <input name="userphone" onChange={studentChangeHandler} value={student.userphone}/>
      </div>
   );
}

export default StateTest3;