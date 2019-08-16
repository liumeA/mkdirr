import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import RouterIndex from "./components/Router/RouterIndex";
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/ViewList';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import { router } from 'umi';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';
import { _THEME } from '@/PolicyStyle';

const styles = {
  head: {
    width: '100%', position: 'fixed', top: 0,
  },
  footer: {
    width: '100%', height: 56, position: 'fixed', bottom: 0,
  },
};


class App extends React.Component {


  handleChange = (event, value) => {
    router.push('/' + value);
  };

  render() {


    return (
      <MuiThemeProvider theme={_THEME}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Typography component={'div'}>
            <header style={styles.head}>
              头部 头部
              头部 头部
              头部 头部
            </header>
            <div style={{ position: 'fixed', bottom: '56px', top: '18px' }}>
              {/*<RouterIndex/>*/}{this.props.children}
            </div>
          </Typography>
        </Slide>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <footer style={styles.footer}>
            <BottomNavigation value={this.props.location.pathname === '/main' ? 'main' : 'list'}
                              onChange={this.handleChange.bind(this)}>
              <BottomNavigationAction label={formatMessage({ id: intl.main.home })} value="main" icon={<HomeIcon/>}/>
              <BottomNavigationAction label={formatMessage({ id: intl.main.list })} value="list" icon={<ListIcon/>}/>
              {/*<BottomNavigationAction label="Nearby" value="nearby" icon={<Icon>home</Icon>}/>*/}
              {/*<BottomNavigationAction label="我的" value="mine" icon={<MineIcon/>}/>*/}
            </BottomNavigation>
          </footer>
        </Slide>
      </MuiThemeProvider>
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
export default App;
