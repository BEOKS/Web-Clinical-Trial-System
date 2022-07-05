import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Box, Collapse, Drawer as PersistentDrawer} from '@mui/material';
import {List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import DrawerHeader from "./DrawerHeader";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {DrawerAction} from "./DrawerReducer";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import FolderIcon from '@mui/icons-material/Folder';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';

export const drawerWidth = 240;

const Drawer = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const managementCollapseOpen = useSelector((state: RootState) => state.DrawerReducer.managementCollapseOpen);

    const handleDrawerClose = () => {
        dispatch(DrawerAction.closeDrawer());
    };

    const handleClickManagement = () => {
        if (managementCollapseOpen) {
            dispatch(DrawerAction.closeManagementCollapse());
        } else {
            dispatch(DrawerAction.openManagementCollapse());
        }
    };

    return (
        <PersistentDrawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={drawerOpen}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleClickManagement}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Management"/>
                        {managementCollapseOpen ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <Collapse in={managementCollapseOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <PeopleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Reviewers"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <ArticleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Session"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <ToggleOffIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Configuration"/>
                        </ListItemButton>
                        <Divider/>
                    </List>
                </Collapse>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FolderIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Files"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </List>
            <Box flexGrow={2}/>
            <List disablePadding>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </PersistentDrawer>
    );
};

export default Drawer;
