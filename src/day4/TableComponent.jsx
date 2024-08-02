import React from 'react';
import { Button, Table } from 'react-bootstrap';

function TableComponent({removeHandler, updateHandler, memberList}) {
   const updateBtn = (e) => {
      console.log("수정 mid", e.target.getAttribute("data-mid"));

      const mid = e.target.getAttribute("data-mid");
      updateHandler(mid);
   };

   const deleteBtn = (e) => {
      removeHandler(e.target.getAttribute("data-mid"));
   };

   return (
      <div>
         <h3>Member List</h3>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>phone</th>
                  <th>active</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {/* memo 하려면 key => 유일한 값 (index 사용 X) */}
               {memberList.map((item, index) => (
                  <tr key={item.mid}>
                     <td>{item.mid}</td>
                     <td>{item.name}</td>
                     <td>{item.phone}</td>
                     <td>
                        <div>
                           <input
                              type="checkbox"
                              defaultChecked={item.active}
                              name="active"
                              data-mid={item.mid}
                              onChange={updateBtn}
                           />
                        </div>
                     </td>
                     {/* <td>{item.active ? "활동" : "잠수"}</td> */}
                     <td>
                        {/* <Button onClick={updateBtn} data-mid={item.mid}>수정</Button>{' '} */}
                        <Button onClick={deleteBtn} data-mid={item.mid}>삭제</Button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </Table>
      </div>
   );
}

export default TableComponent;