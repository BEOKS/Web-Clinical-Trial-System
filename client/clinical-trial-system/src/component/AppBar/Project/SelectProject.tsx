import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {ProjectAction} from "./ProjectReducer";
import {RootState} from "../../../store";
import {useEffect} from "react";
import {getProjectList} from "../../../api/project";

/**
 * 프로젝트 선택 컴포넌트입니다.
 * 'displaySelectProject' state를 true로 설정할 때 화면에 보여집니다.
 * 선택된 프로젝트 이름은 'currentProject' state에 저장됩니다.
 * @constructor
 * @author 김도희 <doheedev@gmail.com>
 */
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