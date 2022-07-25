import {Box, Typography, Slider, useMediaQuery} from "@mui/material";
import {REVIEW_STEP, ReviewerAction} from "../../ReviewerReducer";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import theme from "../../../../theme/theme";

const marksPOM = [
    {value: 0, label: '0',},
    {value: 20, label: '20',},
    {value: 40, label: '40',},
    {value: 60, label: '60',},
    {value: 80, label: '80',},
    {value: 100, label: '100',},
];

/**
 * 0부터 100까지의 값 중 1 단위로 POM을 선택할 수 있는 Slider 컴포넌트입니다.
 * [reviewStep]{@link RootState.ReviewerReducer.reviewStep}이
 * {@link REVIEW_STEP.ORIGINAL} 또는 {@link REVIEW_STEP.ML_RESULT}일 때 활성화됩니다.
 * [MUI breakpoints]{@link https://mui.com/material-ui/customization/breakpoints/#main-content}가
 * md 이상일 때는 Slider가 세로로 배치되고, md 미만일 때는 가로로 배치됩니다.
 * @see {@link https://mui.com/material-ui/react-use-media-query/}
 * @author 김도희 <doheedev@gmail.com>
 */
const PomInput = () => {
    const dispatch = useDispatch();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const reviewStep = useSelector((state: RootState) => state.ReviewerReducer.reviewStep);

    const handleChange = (event: Event, newValue: number | number[]) => {
        dispatch(ReviewerAction.setPom(newValue as number));
    };

    return (
        <Box sx={matches ? {width: '100%'} : {height: 270}}>
            <Typography id="pom-slider" gutterBottom color="text.secondary">
                POM
            </Typography>
            <Slider
                aria-labelledby="pom-slider"
                disabled={reviewStep === REVIEW_STEP.CONFIDENCE}
                defaultValue={30}
                step={1}
                valueLabelDisplay="auto"
                marks={marksPOM}
                orientation={matches ? "horizontal" : "vertical"}
                sx={{mt: 1}}
                onChange={handleChange}
            />
        </Box>
    )
}

export default PomInput;