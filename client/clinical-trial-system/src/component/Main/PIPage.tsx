import * as React from "react";
import DrawerHeader from "../Drawer/DrawerHeader";
import {Main} from "./Main";
import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useEffect} from "react";
import {DrawerAction} from "../Drawer/DrawerReducer";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";

const PI_DESCRIPTION_MESSAGE = <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
    sapien faucibus et molestie ac.</>;

const PI_TITLE_MESSAGE = <>This is PI page.</>;

/**
 * 임시 PI 페이지입니다. 제목과 페이지 설명으로 구성되어 있습니다.
 * @todo 요구사항 명세에 알맞게 페이지의 전체적인 구성을 변경해야 합니다. 제목과 설명 또한 다른 컴포넌트로 대체할 수 있습니다.
 * @author 김도희 <doheedev@gmail.com>
 */
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
                {PI_TITLE_MESSAGE}
            </Typography>
            <Typography paragraph>
                {PI_DESCRIPTION_MESSAGE}
            </Typography>
        </Main>
    );
};

export default PIPage;