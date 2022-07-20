/**
 * @file AppBar 관련 코드를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 */

import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {drawerWidth} from "../Drawer/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, IconButton, Toolbar, Typography} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {DrawerAction} from "../Drawer/DrawerReducer";
import SelectProject from "./Project/SelectProject";
import AddProjectButton from "./Project/AddProjectButton";
import AddProjectDialog from "./Project/AddProjectDialog";
// @ts-ignore
import beamworksLogoWhite from "../../assets/beamwoksLogoWhite.png";

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

/**
 * MUI AppBar 컴포넌트에 트랜지션을 적용한 styled 컴포넌트입니다.
 * Drawer를 열면 Drawer의 너비만큼 AppBar의 너비가 줄어들고
 * Drawer를 닫으면 AppBar의 너비가 원래대로 돌아옵니다.
 * @see {@link https://mui.com/system/styled/}
 */
const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

/**
 * AppBar 좌측에 위치하는 메뉴 아이콘 버튼입니다.
 * 버튼 클릭 시 Drawer를 열 수 있습니다.
 * @param props.drawerOpen - 값이 true일 때 AppBar에서 메뉴 버튼이 보이지 않습니다.
 * @param props.handleDrawerOpen - 메뉴 버튼 클릭 시 실행되는 함수입니다. [drawerOpen]{@link RootState.DrawerReducer.drawerOpen}을 true로 설정하여 Drawer를 엽니다.
 * @param props.displayMenuButton - 값이 false일 때 AppBar에서 메뉴 버튼이 보이지 않습니다.
 */
const MenuButton = (props: { drawerOpen: boolean, handleDrawerOpen: () => void, displayMenuButton: boolean }) => {
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            sx={{mr: 2, ...((props.drawerOpen || !props.displayMenuButton) && {display: 'none'})}}
        >
            <MenuIcon/>
        </IconButton>
    )
}

/**
 * AppBar 좌측에 위치하는 리뷰 세션 제목입니다.
 * @param props.displaySelectProject - 리뷰 세션 제목은 AppBar에 프로젝트 선택 뷰가 없을 때에만 보여야 하므로 [displaySelectProject]{@link RootState.ProjectReducer.displaySelectProject}가 false일 때 나타납니다.
 * @todo displaySelectProject 값에 의존하면 로그인 페이지에서도 리뷰 세션 제목이 보이기 때문에 리뷰 관련 페이지에서만 보이도록 로직을 수정해야 합니다.
 */
const ReviewSessionTitle = (props: { displaySelectProject: boolean }) => {
    return (
        <Box>
            {!props.displaySelectProject &&
                <Typography variant="h6" component="div">
                    CadAI-B<sup>TM</sup>
                </Typography>
            }
        </Box>
    )
}

/**
 * 화면 최상단에 위치하는 AppBar 컴포넌트입니다.
 * AppBar 자체와 우측에 배치한 회사 로고는 모든 페이지에서 항상 보여지며
 * AppBar의 다른 구성요소인 메뉴 버튼, 프로젝트 선택 뷰, 프로젝트 생성 버튼, 리뷰 세션 제목은
 * 페이지에 따라 display 여부를 변경할 수 있습니다.
 * [displayMenuButton]{@link RootState.DrawerReducer.displayMenuButton}처럼
 * 'display~'로 시작하는 state를 true로 설정하면 해당 컴포넌트가 보여집니다.
 */
const AppBar = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const displayMenuButton = useSelector((state: RootState) => state.DrawerReducer.displayMenuButton);
    const displaySelectProject = useSelector((state: RootState) => state.ProjectReducer.displaySelectProject);

    const handleDrawerOpen = () => {
        dispatch(DrawerAction.openDrawer());
    };

    return (
        <StyledAppBar position="fixed" open={drawerOpen}>
            <Toolbar>
                <MenuButton drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen}
                            displayMenuButton={displayMenuButton}/>
                <SelectProject/>
                <AddProjectButton/>
                <AddProjectDialog/>
                <ReviewSessionTitle displaySelectProject={displaySelectProject}/>
                <Box flexGrow={2}/>
                <Box>
                    <img src={beamworksLogoWhite} height={35} alt="beamworks logo"/>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
}
export default AppBar;