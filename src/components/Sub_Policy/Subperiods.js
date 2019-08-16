import React from 'react';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { formatMessage } from 'umi-plugin-locale';
import { init as intl } from '@/util/init';


const Subperiods = ({ keyId, allStartTime, allEndTime }) => {


  return (
    <Typography component={'div'} style={{ marginBottom: 10 }}>
      <Typography component={'div'} style={{ marginBottom: 10 }}>
        {formatMessage({ id: intl.period })}{keyId + 1}


        <TextField
          id="date"
          label={formatMessage({ id: intl.period.startDate })}
          type="date"

          defaultValue="2017-05-24"
          style={{
            marginLeft: 3,
            marginRight: 3,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={date => {
            allStartTime(keyId, date.target.value);
          }}
        />
        <TextField
          id="date"
          label={formatMessage({ id: intl.period.endDate })}
          type="date"
          defaultValue="2017-05-24"
          style={{
            marginLeft: 3,
            marginRight: 3,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={date => {
            allEndTime(keyId, date.target.value);
          }}
        />
      </Typography>
    </Typography>
  );
};

export default Subperiods;
