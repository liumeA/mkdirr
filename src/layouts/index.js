import styles from './index.css';


import { setLocale } from 'umi-plugin-locale';

import React, { Component } from 'react';
import { Language } from '@/components/language';


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currylau: 'zh-CN',
    };
  }

  changeLun = () => {
    setLocale(this.state.currylau === 'zh-CN' ? 'en-US' : 'zh-CN');
    this.setState({
      currylau: this.state.currylau === 'zh-CN' ? 'en-US' : 'zh-CN',
    });
  };

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

export default Index;
