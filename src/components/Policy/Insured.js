import React from 'react';
import { TextField } from '@material-ui/core/index';
import InputAdornment from '@material-ui/core/InputAdornment/index';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';

const styles = { text: { marginBottom: 10 }, textWidth: { minWidth: '85px' } };
const Insured = ({ onChangeState }) => {
  return (
    <div>
      <TextField
        // label="被保险人"
        style={styles.text}
        onChange={onChangeState('insured_name')}

        InputProps={{
          startAdornment: <InputAdornment position="start"
                                          style={styles.textWidth}>{formatMessage({ id: intl.insured.insuredName })}</InputAdornment>,
          // endAdornment: <InputAdornment position="end"> % </InputAdornment>,
        }}
      />
      <div color={'primary'}>
        <TextField
          // label="投保地点"
          style={styles.text}
          onChange={onChangeState('insured_place')}
          // variant="filled"

          InputProps={{
            startAdornment: <InputAdornment position="start"
                                            style={styles.textWidth}>{formatMessage({ id: intl.insured.insuredPlace })}</InputAdornment>,
            // endAdornment: <InputAdornment position="end"> % </InputAdornment>,
          }}
        />
      </div>
      <div color={'primary'}>
        <TextField
          // label="保险标的"
          style={styles.text}
          onChange={onChangeState('subject')}

          InputProps={{
            startAdornment: <InputAdornment position="start"
                                            style={styles.textWidth}>{formatMessage({ id: intl.insured.subject })}</InputAdornment>,
            // endAdornment: <InputAdornment position="end"> % </InputAdornment>,
          }}
        />
      </div>
    </div>
  );
};


export default Insured;
