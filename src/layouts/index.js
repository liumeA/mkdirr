import styles from './index.css';


import { setLocale } from 'umi-plugin-locale';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


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

    alert(this.state.currylau);
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!
          <Button onClick={() => {

            this.changeLun();
          }}> 改变</Button>
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Index;
