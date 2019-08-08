import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { setLocale ,getLocale} from 'umi-plugin-locale';

export const Language = () => {
  function setLang(e) {
    setLocale(e.target.value);
  }

  return (
    <Select
    value={getLocale()}
    onChange={setLang}>
    <MenuItem value={'zh-CN'}>中文</MenuItem>
    <MenuItem value={'en-US'}>English</MenuItem>
  </Select>);
};
