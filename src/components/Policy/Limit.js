import React from 'react';
import { Typography } from '@material-ui/core/index';
import Select from '@material-ui/core/Select/index';
import MenuItem from '@material-ui/core/MenuItem/index';
import Input from '@material-ui/core/es/Input/Input';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';
import { _Css_Select } from '@/css';

const Limit = ({ onChangeState, limitNo }) => {
  return (
    <Typography component={'div'} color={'primary'}>
      {formatMessage({ id: intl.limit.limit_event })}
      <Select
        value={limitNo}
        onChange={onChangeState('event_number_covered')} style={_Css_Select.minWidth}>
        <MenuItem value={0}>{formatMessage({ id: intl.limit.event.Array0 })}</MenuItem>
        <MenuItem value={1}>{formatMessage({ id: intl.limit.event.Array1 })}</MenuItem>
        <MenuItem value={2}>{formatMessage({ id: intl.limit.event.Array2 })}</MenuItem>
        <MenuItem value={3}>{formatMessage({ id: intl.limit.event.Array3 })}</MenuItem>
        <MenuItem value={4}>{formatMessage({ id: intl.limit.event.Array4 })}</MenuItem>
      </Select>
      <br/>
      {formatMessage({ id: intl.limit.limit })}<Input onChange={onChangeState('limit')} style={{ width: '100px' }}/>元
    </Typography>
  );
};


export default Limit;
