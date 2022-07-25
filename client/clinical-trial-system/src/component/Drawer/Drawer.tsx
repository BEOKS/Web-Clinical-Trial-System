import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Drawer as PersistentDrawer} from '@mui/material';
import {List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import DrawerHeader from "./DrawerHeader";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {DrawerAction} from "./DrawerReducer";

export const drawerWidth = 240;

/**
 * AppBar에서 메뉴 아이콘 버튼 클릭 시 열리는 Drawer입니다.
 * @todo Reviewer, Session, Log out 등 Drawer의 메뉴 아이템 UI는 'feature/BC-45-프로젝트-삭제' 브랜치에 개발해두었으니 확인 후 병합해주세요. (리팩토링은 하지 않은 단계입니다.)
 * @author 김도희 <doheedev@gmail.com>
 */
const Drawer = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);

    const handleDrawerClose = () => {
        dispatch(DrawerAction.closeDrawer());
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
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </PersistentDrawer>
    );
};

export default Drawer;
