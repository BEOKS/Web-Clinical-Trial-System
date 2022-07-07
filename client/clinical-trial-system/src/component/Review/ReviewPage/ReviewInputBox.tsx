import {Box, Button, Stack, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import * as React from "react";

const marks = [
    {value: 0, label: '0',},
    {value: 20, label: '20',},
    {value: 40, label: '40',},
    {value: 60, label: '60',},
    {value: 80, label: '80',},
    {value: 100, label: '100',},
];

const ReviewInputBox = () => {
    return (
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
    )
};

export default ReviewInputBox;