/**
 * @file 리뷰 페이지에 대한 코드를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 */

import {Main} from "../../Main/Main";
import {Box, Chip, Container, Grid, Skeleton} from "@mui/material";
import DrawerHeader from "../../Drawer/DrawerHeader";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {DrawerAction} from "../../Drawer/DrawerReducer";
import {ProjectAction} from "../../AppBar/Project/ProjectReducer";
import ReviewInputBox from "./ReviewInputBox";
import ReviewInfoBox from "./ReviewInfoBox";
import {REVIEW_STEP} from "../ReviewerReducer";

interface IMAGE_INFO {
    type: string,
    label: string,
}

const IMAGE_OPTIONS: IMAGE_INFO[] = [
    {type: 'originalImage', label: 'Original Image'},
    {type: 'mlResultImage', label: 'ML Result Image'},
]

/**
 * 아래쪽에 라벨이 달린 초음파 이미지 컴포넌트입니다.
 * {@link IMAGE_OPTIONS}에 따라 원본 초음파 이미지 또는 ML 결과 이미지로 나뉩니다.
 * 리뷰 페이지에서 원본 초음파 이미지는 [reviewStep]{@link RootState.ReviewerReducer.reviewStep} 값에 관계없이 항상 보여지며,
 * ML 결과 이미지는 {@link REVIEW_STEP.ORIGINAL}일 때엔 Skeleton 컴포넌트로 보이고 그 외엔 실제 이미지가 보여집니다.
 */
const ImageWithLabel = (props: { type: string, label: string }) => {
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    return (
        <Grid item xs>
            {reviewStep === REVIEW_STEP.ORIGINAL && props.type === "mlResultImage" ?
                <Skeleton variant="rectangular">
                    <img src={`/api/review/data/${currentImageNumber}/${props.type}`} alt={props.label} width={'100%'}/>
                </Skeleton> :
                <img src={`/api/review/data/${currentImageNumber}/${props.type}`} alt={props.label} width={'100%'}/>
            }
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                <Chip label={props.label} sx={{width: '100%'}}/>
            </Box>
        </Grid>
    )
};

/**
 * 초음파 영상 리뷰 페이지입니다.
 * 리뷰 정보 박스, 원본 이미지, ML 결과 이미지, 리뷰 입력 박스로 구성됩니다.
 * [MUI breakpoints]{@link https://mui.com/material-ui/customization/breakpoints/#main-content} 중
 * md(900px)를 기준으로 리뷰 입력 박스의 배치가 변경됩니다.
 * 화면 너비가 md 이상인 경우 리뷰 입력 박스가 이미지들의 우측에 위치하고,
 * md 미만인 경우 이미지들 하단에 위치합니다.
 */
const ReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="xl">
                <DrawerHeader/>
                <Grid container direction={{xs: 'column', md: 'row'}} spacing={3} sx={{my: 2}}>
                    <Grid item container direction="column" xs md spacing={3}>
                        <Grid item>
                            <ReviewInfoBox/>
                        </Grid>
                        <Grid item container spacing={3}>
                            {IMAGE_OPTIONS.map(imageOption =>
                                <ImageWithLabel type={imageOption.type} label={imageOption.label}
                                                key={imageOption.type}/>)}
                        </Grid>
                    </Grid>
                    <Grid item xs md={2}>
                        <ReviewInputBox/>
                    </Grid>
                </Grid>
            </Container>
        </Main>
    );
};

export default ReviewPage;