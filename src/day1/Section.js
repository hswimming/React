import React from 'react';

function Section(props) {
   return (
      // Fragment : 비어있는 태그, 전체를 감쌌다는 의미
      <>
         <h1>내용</h1>
         <section>
            <article>
               <h1>React 학습</h1>
               <p>Props</p>
               <p>state</p>
               <p>Component</p>
               <hr/>
            </article>
         </section>
      </>
   );
}

export default Section;