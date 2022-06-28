import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {ProjectAction} from "./ProjectReducer";
import {RootState} from "../../../store";

const SelectProject = () => {
    const dispatch = useDispatch();
    const currentProject = useSelector((state: RootState) => state.ProjectReducer.currentProject);
    const displaySelectProject = useSelector((state: RootState) => state.ProjectReducer.displaySelectProject);

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(ProjectAction.setCurrentProject(event.target.value as string));
    };

    return (
        <FormControl sx={{minWidth: 150, ...((!displaySelectProject) && {display: 'none'})}} size="small"
                     color="secondary">
            <Select
                value={currentProject}
                onChange={handleChange}
                displayEmpty
                inputProps={{'aria-label': 'project-select-label'}}
                sx={{backgroundColor: '#fff'}}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectProject;