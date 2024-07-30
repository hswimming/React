import React, { Component } from 'react';

class Menu extends Component {
   render() {
      return (
         // Fragment : 비어있는 태그, 전체를 감쌌다는 의미
         <>
            <nav>
               <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
               </ul>
            </nav>
            <hr/>
         </>
      );
   }
}

export default Menu;