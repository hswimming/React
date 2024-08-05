import axios from 'axios';
import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WebBoardList(props) {
   const [boardList, setBoardList] = useState([]); // 여러건의 데이터가 오니까 배열로

   /*
   // 매번 하기 번거로움
   useEffect(() => {
      // ajax, fetch, primise...비동기 통신
      // 갔다온 후 성공하면 then 수행, 실패하면 catch 수행
      axios({
         url : "http://localhost:9999/api/board/list",
         method : "GET"

      }).then((response) => {
         console.log(response.data);
         setBoardList(response.data);

      }).catch((error) => {
         console.log(error);
      });

   }, []); // 의존 배열이 빈 배열이면 최초 렌더링 시 1회 수행
   */

   useEffect(() => {
      call("http://localhost:9999/api/board/list", "GET", null)
         .then((response) => {
            setBoardList(response); // 위와 같은 코드임
         }
      );
   }, []);

   return (
      <div>
         <p>Board List</p>

         <h3>Member List</h3>
         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>수정일</th>
                  <th>댓글 수</th>
               </tr>
            </thead>
            <tbody>
               {/* 백틱으로 파라미터 넘겨주기 */}
               {boardList.map((board, index) => (
                  <tr key={board.bno}>
                     <td>
                        <Link to={`/webboard/detail/${board.bno}`}>{board.bno}</Link>
                     </td>
                     <td>{board.title}</td>
                     <td>{board.content}</td>
                     <td>{board.mname}</td>
                     <td>{board.regdate}</td>
                     <td>{board.updatedate}</td>
                     <td>{board.replyCount}</td>
                  </tr>
               ))}
            </tbody>
            </Table>
      </div>
   );
}

export default WebBoardList;