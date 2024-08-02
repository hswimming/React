import Button from 'project4/component/Button';
import Header from 'project4/component/Header';
import Editor from 'project4/component/Editor';

function Home(props) {
   // 쿼리 스트링으로 값 불러오기
   // const [searchParams, setSearchParams] = useSearchParams();
   // console.log("Home sort :", searchParams.get("sort"));

   return (
      <div>
         <Header
            title={"Home"}
            leftChild={
               <Button
                  type="positive"
                  text={"긍정 버튼"}
                  onClick={() => { alert("negative button"); }}
               />
            } // leftChild END

            rightChild={
               <Button
                  type="negative"
                  text={"부정 버튼"}
                  onClick={() => { alert("negative button"); }}
               />
            } // rightChild END
         />

         <Editor onSubmit={() => { alert("일기 작성 완료"); }}/>
      </div>
   );
}

export default Home;