import merge from 'lodash.merge';
import get from 'lodash.get';
import * as TUDN from '../lib/themes/tudn';
import GlobalStyles from '../lib/accessories/GlobalStyles';
import { ThemeProvider } from 'styled-components';


function MyApp({ Component, pageProps }) {
  const theme = ['Light,Dark'];
  const getTheme = (mode, btheme) =>
  merge({}, btheme,{
    color:get(btheme.colors.modes,mode,btheme.colors),
  });
  const THEME = getTheme (theme[1],TUDN);
  return (
  <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <GlobalStyles/>
  </ThemeProvider>
  )
}

export default MyApp
