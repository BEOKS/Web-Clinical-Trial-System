import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {drawerWidth} from "../Drawer/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import {Box, IconButton, Toolbar} from "@mui/material";
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

const AppBar = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const displayMenuButton = useSelector((state: RootState) => state.DrawerReducer.displayMenuButton);

    const handleDrawerOpen = () => {
        dispatch(DrawerAction.openDrawer());
    };

    return (
        <StyledAppBar position="fixed" open={drawerOpen}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{mr: 2, ...((drawerOpen || !displayMenuButton) && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
                <SelectProject/>
                <AddProjectButton/>
                <AddProjectDialog/>
                <Box flexGrow={2}/>
                <Box>
                    <img src={beamworksLogoWhite} height={35} alt="beamworks logo"/>
                </Box>
            </Toolbar>
        </StyledAppBar>
    );
}
export default AppBar;