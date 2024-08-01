import { Table } from 'react-bootstrap';

function DisplayStudentList(props) {
   const {studentList} = props;

   return (
      <div>
         <h3>학생 정보 목록</h3>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>이름</th>
                  <th>메일</th>
                  <th>나이</th>
               </tr>
            </thead>
            <tbody>
               {/* 반복문 돌면서 화면 출력 */}
               {studentList.map((item, index) => (
                  <tr key={index}>
                     <td>{item.mid}</td>
                     <td>{item.name}</td>
                     <td>{item.email}</td>
                     <td>{item.age}</td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </div>
   );
}

export default DisplayStudentList;