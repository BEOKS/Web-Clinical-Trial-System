import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {ProjectAction} from "./ProjectReducer";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {getProjectList} from "../../../api/project";

const SelectProject = () => {
    const dispatch = useDispatch();
    const currentProject = useSelector((state: RootState) => state.ProjectReducer.currentProject);
    const displaySelectProject = useSelector((state: RootState) => state.ProjectReducer.displaySelectProject);
    const projectList = useSelector((state: RootState) => state.ProjectReducer.projectList);

    useEffect(() => {
        getProjectList(projectList => dispatch(ProjectAction.setProjectList(projectList)));
    }, []);

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
                {projectList.map(project => <MenuItem key={project} value={project}>{project}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default SelectProject;