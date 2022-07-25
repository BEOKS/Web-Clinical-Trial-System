import {styled} from "@mui/material/styles";

/**
 * Drawer 상단에 Drawer 닫기 아이콘 버튼을 배치하기 위한 styled div 컴포넌트입니다.
 * @author 김도희 <doheedev@gmail.com>
 */
const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default DrawerHeader;