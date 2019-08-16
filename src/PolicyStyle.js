import { createMuiTheme } from '@material-ui/core';
import { TENSOREN_BULE } from '@/components/Const';

export const _STYLE_TOPBAR = {
  width: '100%',
  position: 'fixed',
  top: 0,
  height: '50px',
  background: TENSOREN_BULE,
  textAlign: 'center',
  color: '#fff',
  fontSize: 20,
  verticalAlign: 'middle',
  lineHeight: '50px',
  zIndex: 9999,
};
export const _STYLE_POLICY = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },


  bottomNv: {
    width: '100%', position: 'fixed', bottom: 0,
  },
  bottomNv_b: {
    width: '33.33%', height: 56, backgroundColor: '#fff',
  },
  bottomPlus: {
    position: 'fixed', bottom: 60, right: 5, zIndex: 99,
  }, rootPlus: {
    width: '100%',
    height: document.documentElement.clientHeight,
    zIndex: 1,
    top: 0,
    position: 'fixed',
    textAlign: 'right',
    opacity: '0.8',
  }, buttonMargin: {
    margin: 2,
  },
});

export const _THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: TENSOREN_BULE,
    },
    secondary: {
      main: TENSOREN_BULE,
    },
  },
});

