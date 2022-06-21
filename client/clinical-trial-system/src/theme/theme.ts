import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffcccb',
            main: '#ef9a9a',
            dark: '#ba6b6c',
            contrastText: 'rgba(54,0,0,0.94)',
        },
        secondary: {
            light: '#ffff8b',
            main: '#ffee58',
            dark: '#c9bc1f',
            contrastText: '#000',
        }
    },
});

export default theme;