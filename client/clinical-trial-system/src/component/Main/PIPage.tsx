import * as React from "react";
import DrawerHeader from "../Drawer/DrawerHeader";
import {Main} from "./Main";
import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useEffect} from "react";
import {DrawerAction} from "../Drawer/DrawerReducer";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";

const PIPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);

    useEffect(() => {
        dispatch(DrawerAction.displayMenuButton());
        dispatch(ProjectAction.displaySelectProject());
    });

    return (
        <Main open={drawerOpen}>
            <DrawerHeader/>
            <Typography paragraph variant="h4">
                This is PI page.
            </Typography>
            <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>
        </Main>
    );
};

export default PIPage;