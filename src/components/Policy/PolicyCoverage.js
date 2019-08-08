import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { init as intl } from '@/util/init';
import { formatMessage } from 'umi-plugin-locale';
import { Typography, Zoom } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { router } from 'umi';


const PolicyCoverage = ({ onChangeUnderlying, index, keyId }) => {
  function f() {
    router.push('/main');
  }

  return (
    <Zoom in={true}>
      <Typography component={'div'}>
        <Select
          value={index}
          onChange={onChangeUnderlying(keyId)}
        >
          <MenuItem value={'Intensity category'}>{formatMessage({ id: intl.underlying.BeaufortScale })}</MenuItem>
          <MenuItem value={'Beaufort scale'}>{formatMessage({ id: intl.underlying.IntensityCategory })}</MenuItem>
          <MenuItem value={'TempMax'}>{formatMessage({ id: intl.underlying.TempMax })}</MenuItem>
          <MenuItem value={'TempMin'}>{formatMessage({ id: intl.underlying.TempMin })}</MenuItem>
          <MenuItem value={'TempAverage'}>{formatMessage({ id: intl.underlying.TempAverage })}</MenuItem>
          <MenuItem value={'WindSpeedMax'}>{formatMessage({ id: intl.underlying.WindSpeedMax })}</MenuItem>
          <MenuItem value={'WindSpeedGust'}>{formatMessage({ id: intl.underlying.WindSpeedGust })}</MenuItem>
          <MenuItem value={'WindSpeedAverage'}>{formatMessage({ id: intl.underlying.WindSpeedAverage })}</MenuItem>
          <MenuItem value={'Precipitation'}>{formatMessage({ id: intl.underlying.Precipitation })}</MenuItem>
          <MenuItem value={'SunshineHour'}>{formatMessage({ id: intl.underlying.SunshineHour })}</MenuItem>
          <MenuItem value={'Pressure'}>{formatMessage({ id: intl.underlying.Pressure })}</MenuItem>
          <MenuItem value={'SnowDepth'}>{formatMessage({ id: intl.underlying.SnowDepth })}</MenuItem>
          <MenuItem value={'Visibility'}>{formatMessage({ id: intl.underlying.Visibility })}</MenuItem>
        </Select>
        <Button color={'secondary'} onClick={f} > 编辑</Button>
    </Typography>
    </Zoom>
  );
};

export default PolicyCoverage;
