import {Main} from "../Main/Main";
import {Box, Button, Chip, Container, Divider, Grid, Skeleton, Stack, Typography} from "@mui/material";
import DrawerHeader from "../Drawer/DrawerHeader";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {useEffect} from "react";
import {DrawerAction} from "../Drawer/DrawerReducer";
import {ProjectAction} from "../AppBar/Project/ProjectReducer";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import FaceIcon from '@mui/icons-material/Face';
import ImageIcon from '@mui/icons-material/Image';

const marks = [
    {value: 0, label: '0',},
    {value: 20, label: '20',},
    {value: 40, label: '40',},
    {value: 60, label: '60',},
    {value: 80, label: '80',},
    {value: 100, label: '100',},
];

const UltrasonicReviewPage = () => {
    const dispatch = useDispatch();
    const drawerOpen = useSelector((state: RootState) => state.DrawerReducer.drawerOpen);
    const reviewerCount = useSelector((state: RootState) => state.ReviewerReducer.reviewerCount);

    useEffect(() => {
        dispatch(DrawerAction.dontDisplayMenuButton());
        dispatch(ProjectAction.doNotDisplaySelectProject());
    });

    return (
        <Main open={drawerOpen}>
            <Container maxWidth="xl">
                <DrawerHeader/>
                <Grid container spacing={3} sx={{my: 2}}>
                    <Grid item container direction="column" xs spacing={3}>
                        <Grid item>
                            <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
                                <Stack direction="row" spacing={4}>
                                    <Stack direction="row" spacing={1}>
                                        <Chip label="Image Number" icon={<ImageIcon/>} color="primary"
                                              variant="outlined"/>
                                        <Chip label="1" color="info"/>
                                    </Stack>
                                    <Divider orientation="vertical" flexItem></Divider>
                                    <Stack direction="row" spacing={1}>
                                        <Chip label="Reviewer Number" icon={<FaceIcon/>} color="success"
                                              variant="outlined"/>
                                        <Chip label={reviewerCount} color="info"/>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item container spacing={3}>
                            <Grid item xs direction="row">
                                <Skeleton variant="rectangular" height={400}/>
                                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                    <Chip label="Original Ultrasonic Image" sx={{width: '100%'}}/>
                                </Box>
                            </Grid>
                            <Grid item xs direction="row">
                                <Skeleton variant="rectangular" height={400}/>
                                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                                    <Chip label="AI Result" sx={{width: '100%'}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{backgroundColor: '#eee', p: 3}} borderRadius={1}>
                            <Stack direction="row" spacing={3}>
                                <FormControl>
                                    <FormLabel id="bi-rads-label">BI-RADS</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="bi-rads-label"
                                        defaultValue="1"
                                        name="bi-rads-group"
                                    >
                                        <FormControlLabel value="1" control={<Radio/>} label="1"/>
                                        <FormControlLabel value="2" control={<Radio/>} label="2"/>
                                        <FormControlLabel value="3" control={<Radio/>} label="3"/>
                                        <FormControlLabel value="4a" control={<Radio/>} label="4a"/>
                                        <FormControlLabel value="4b" control={<Radio/>} label="4b"/>
                                        <FormControlLabel value="4c" control={<Radio/>} label="4c"/>
                                        <FormControlLabel value="5" control={<Radio/>} label="5"/>
                                    </RadioGroup>
                                </FormControl>
                                <Box sx={{height: 270}}>
                                    <Typography id="pom-slider" gutterBottom color="text.secondary">
                                        POM
                                    </Typography>
                                    <Slider
                                        aria-labelledby="pom-slider"
                                        defaultValue={30}
                                        step={1}
                                        valueLabelDisplay="auto"
                                        marks={marks}
                                        orientation="vertical"
                                        sx={{mt: 1}}
                                    />
                                </Box>
                            </Stack>
                            <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                                <Button variant="contained" sx={{px: 6}}>Verify</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Main>
    );
};

export default UltrasonicReviewPage;