import styles from './index.css';

import React, { Component } from 'react';
import { Language } from '@/components/language';


class Index extends Component {


  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!
          {Language()}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

// document.onkeydown = function(event){
//
//   if(window.event && window.event.keyCode == 123) {
//     alert("F12被禁用");
//     event.returnValue=false;
//   }
// };
export default Index;
