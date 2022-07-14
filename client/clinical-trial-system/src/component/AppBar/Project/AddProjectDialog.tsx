import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ProjectAction} from "./ProjectReducer";

const ADD_PROJECT_DIALOG_TITLE_MESSAGE = <>Add Project</>;
const ADD_PROJECT_DIALOG_CONTENT_MESSAGE = <>Please enter a project name to create a new project. The project name must
    be less than ** characters.</>

export default function AddProjectDialog() {
    const dispatch = useDispatch();
    const projectAddDialogOpen = useSelector((state: RootState) => state.ProjectReducer.projectAddDialogOpen);
    const newProjectName = useSelector((state: RootState) => state.ProjectReducer.newProjectName);

    const handleClose = () => {
        dispatch(ProjectAction.closeAddProjectDialog());
    };

    const handleClickOKButton = () => {
        // TODO request for create project

        dispatch(ProjectAction.setNewProjectName(''));
        dispatch(ProjectAction.closeAddProjectDialog());
    };

    return (
        <Dialog open={projectAddDialogOpen} onClose={handleClose}>
            <DialogTitle>{ADD_PROJECT_DIALOG_TITLE_MESSAGE}</DialogTitle>
            <DialogContent>
                <DialogContentText>{ADD_PROJECT_DIALOG_CONTENT_MESSAGE}</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="projectName"
                    label="Project Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                        dispatch(ProjectAction.setNewProjectName(String(e.target.value)));
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button disabled={!newProjectName} onClick={handleClickOKButton}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
