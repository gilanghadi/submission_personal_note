import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, red, yellow } from '@mui/material/colors';

const base = createTheme({
  palette: {
    primary: {
      main: blue[600],
      main_dark: blue[700],
    },
    secondary: {
      main: red[500],
      main_archive: yellow[900],
    },
  },
})

const theme = responsiveFontSizes(base)
export default theme