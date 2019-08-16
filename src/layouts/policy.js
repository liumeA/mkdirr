import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { _STYLE_TOPBAR, _THEME } from '@/PolicyStyle';
import { Button } from '@material-ui/core';
import { router } from 'umi';

class Policy extends Component {
  render() {
    return (
      <MuiThemeProvider theme={_THEME}>
        <header style={_STYLE_TOPBAR}>
          <Button style={{ position: 'absolute', left: 0, top: 8.5, color: '#fff' }} onClick={() => {
            router.goBack();
          }}>返回</Button>
          保险单
        </header>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default Policy;
