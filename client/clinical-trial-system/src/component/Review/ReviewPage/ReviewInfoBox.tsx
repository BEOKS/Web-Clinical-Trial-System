import {Box, Chip, Divider, Stack} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import FaceIcon from "@mui/icons-material/Face";
import * as React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const ReviewInfoBox = () => {
    const reviewerCount = useSelector((state: RootState) => state.ReviewerReducer.reviewerCount);
    const currentImageNumber = useSelector((state: RootState) => state.ReviewerReducer.currentImageNumber);

    return (
        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
            <Stack direction="row" spacing={4}>
                <Stack direction="row" spacing={1}>
                    <Chip label="Image Number" icon={<ImageIcon/>} color="primary"
                          variant="outlined"/>
                    <Chip label={currentImageNumber} color="info"/>
                </Stack>
                <Divider orientation="vertical" flexItem></Divider>
                <Stack direction="row" spacing={1}>
                    <Chip label="Reviewer Number" icon={<FaceIcon/>} color="success"
                          variant="outlined"/>
                    <Chip label={reviewerCount} color="info"/>
                </Stack>
            </Stack>
        </Box>
    )
};

export default ReviewInfoBox;