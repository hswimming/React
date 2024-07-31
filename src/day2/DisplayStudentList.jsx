import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function DisplayStudentList(props) {
   const {studentList} = props;

   return (
      <div>
         <h2>학생 정보 목록</h2>
         <Card style={{ width: '30rem' }}>
            <ListGroup variant="flush">
               {studentList.map((item, index) => (
                  <ListGroup.Item key={index}>
                     {item.stdName} 학생의 전공은 {item.major}
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </Card>
      </div>
   );
}

export default DisplayStudentList;