import {styled} from "@mui/material/styles";
import {drawerWidth} from "../Drawer/Drawer";

/**
 * Drawer의 open 상태에 따라 자동으로 페이지 본문의 너비가 변경되도록 하는 styled main 컴포넌트입니다.
 * 페이지 구성 시 본문에 위치하는 다른 컴포넌트들의 wrapper 컴포넌트로 설정합니다.
 * @author 김도희 <doheedev@gmail.com>
 */
export const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));