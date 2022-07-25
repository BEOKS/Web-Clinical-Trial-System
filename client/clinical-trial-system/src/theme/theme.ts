/**
 * @file MUI 컴포넌트의 기본 색상을 변경하거나 새로운 색상을 추가하기 위해 관련 코드를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 * @see {@link https://mui.com/material-ui/customization/palette/#adding-new-colors}
 * @see {@link https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation}
 */
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface Palette {
        naver: Palette['primary'];
        kakao: Palette['primary'];
        google: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        naver?: PaletteOptions['primary'];
        kakao?: PaletteOptions['primary'];
        google?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        naver: true;
        kakao: true;
        google: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#629749',
            main: '#33691e',
            dark: '#003d00',
            contrastText: '#fff',
        },
        secondary: {
            main: '#e7f5e1',
            contrastText: '#000',
        },
        naver: {
            main: '#03C75A',
            contrastText: '#fff',
        },
        kakao: {
            main: '#FEE500',
            contrastText: '#000',
        },
        google: {
            main: '#fff',
            contrastText: '#000',
        },
    },
});

export default theme;