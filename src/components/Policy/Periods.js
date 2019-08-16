import { Typography, Zoom } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import { formatMessage } from 'umi-plugin-locale';
import { init as intl } from '@/util/init';
import React from 'react';

const styles = {
  text: {
    marginLeft: 3,
    marginRight: 3,
  },
};

const Periods = ({ onChangeState, inception, end }) => {

  return (
    <Zoom in={true}>
      <Typography component={'div'} style={{ marginBottom: 10 }}>

        <TextField
          id="date"
          label={formatMessage({ id: intl.period.startDate })}
          type="date"
          defaultValue={inception}
          style={styles.text}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={date => {
            onChangeState('inception')(date);
          }}
        />
        <TextField
          id="date"
          label={formatMessage({ id: intl.period.endDate })}
          type="date"
          defaultValue={end}
          style={styles.text}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={date => {
            onChangeState('end')(date);
          }}
        />
      </Typography>
    </Zoom>
  );
};


export default Periods;
