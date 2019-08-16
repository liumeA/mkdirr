import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { Button } from '@material-ui/core/index';
import Cookies from 'react-cookies';
import withStyles from '@material-ui/core/styles/withStyles';
import { _API_Create_typhoon } from '../service/APInterface';
import { router } from 'umi';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';
// import Login from "./User/Login";
// import Weather from "./Main/Weather/Weather";


const styles = theme => ({
  button: {
    width: '100%',
    textAlign: 'left',
    fontSize: '20px',
  }, buttonContent: {
    margin: 10,
  },
});


class Main extends Component {


  render() {
    const classes = styles();
    return (
      <div>
        <img
          src={logo}
          alt={formatMessage({ id: intl.tensoren })}
          style={{
            margin: '0 auto',
            display: 'flex',
            marginTop: 50,
            padding: 20,
            width: '50%',
          }}/>
        <div style={classes.buttonContent}>
          <Button color={'primary'} style={classes.button} fullWidth
                  onClick={this.weatherClick}>          {formatMessage({ id: intl.main.text1 })}</Button>
          <Button style={classes.button} fullWidth disabled
                  onClick={this.typhoonClick}>{formatMessage({ id: intl.main.text2 })}</Button>
          <Button style={classes.button} fullWidth disabled>{formatMessage({ id: intl.main.text3 })}</Button>
          <Button style={classes.button} fullWidth disabled>{formatMessage({ id: intl.main.text4 })}</Button>
          <Button style={classes.button} fullWidth disabled>{formatMessage({ id: intl.main.text5 })}</Button>
          <Button style={classes.button} fullWidth disabled>{formatMessage({ id: intl.main.text6 })}</Button>
        </div>

      </div>
    );
  }

  weatherClick = () => {
    // let username = Cookies.load('user').substr(0, (Cookies.load('user')).indexOf(';'));
    let username = 'Cookies.load(\'user\').substr(0, (Cookies.load(\'user\')).indexOf(\';\')';
    let data = {
      user_name: username,
      submission_id: 0,
      underlyingArray: 'TempMax',
      underlying_upper_threshold: 9999.9999,
      underlying_lower_threshold: 0.0,
      underlying_type: 0,
      trigger_type: 0,
      deductible_type: 0,
      deductible_amount: 0.0,
      deductible_ratio: 0.0,
      limit: 9999.9999,
      event_number_covered: 0,

    };
    const res = _API_Create_typhoon(data);
    if (res.value !== '')
      router.push('/policy');
  };

  typhoonClick = () => {
    // ReactDOM.render(<Login/>, document.getElementById('root'));
  };
}


export default withStyles(styles)(Main);
