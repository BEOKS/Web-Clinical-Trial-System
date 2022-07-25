import {Box, Button, Chip, Divider, Stack} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import FaceIcon from "@mui/icons-material/Face";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ReviewerAction} from "../ReviewerReducer";
import ExitReviewDialog from "./ExitReviewDialog";

/**
 * 전체 중 현재 이미지 번호(문제 번호), 리뷰어 번호, 나가기 버튼으로 구성된 리뷰 정보 컴포넌트입니다.
 * 나가기 버튼 클릭 시 리뷰 종료 의사를 묻는 다이얼로그를 띄웁니다.
 * @author 김도희 <doheedev@gmail.com>
 */
const ReviewInfoBox = () => {
    const dispatch = useDispatch();
    const reviewerCount = useSelector((state: RootState) => state.ReviewerReducer.reviewerCount);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);
    const imageNumberList = useSelector((state: RootState) => state.ReviewerReducer.imageNumberList);

    const handleClickExit = () => {
        dispatch(ReviewerAction.openExitReviewDialog());
    };

    return (
        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
            <Stack direction="row" spacing={4}>
                <Stack direction="row" spacing={1}>
                    <Chip label="Image Number" icon={<ImageIcon/>} color="primary" variant="outlined"/>
                    <Chip label={`${currentImageNumber} of ${imageNumberList.length}`} color="info"/>
                </Stack>
                <Divider orientation="vertical" flexItem></Divider>
                <Stack direction="row" spacing={1}>
                    <Chip label="Reviewer Number" icon={<FaceIcon/>} color="success" variant="outlined"/>
                    <Chip label={reviewerCount} color="info"/>
                </Stack>
                <Box flexGrow={2}/>
                <Button variant="outlined" color="info" onClick={handleClickExit}>EXIT</Button>
            </Stack>
            <ExitReviewDialog/>
        </Box>
    )
};

export default ReviewInfoBox;