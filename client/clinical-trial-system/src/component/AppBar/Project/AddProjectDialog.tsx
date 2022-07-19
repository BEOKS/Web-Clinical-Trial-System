import * as React from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ProjectAction} from "./ProjectReducer";
import {ChangeEvent} from "react";

/**
 * 새 프로젝트 이름 입력 다이얼로그의 제목 메세지입니다.
 * @constant
 * @author 김도희 <doheedev@gmail.com>
 */
const ADD_PROJECT_DIALOG_TITLE_MESSAGE = <>Add Project</>;

/**
 * 새 프로젝트 이름 입력 다이얼로그의 본문 메세지입니다.
 * @todo 임시 텍스트이므로 메세지를 적절하게 수정해야 합니다. (입력받을 프로젝트 이름의 글자 수 제한 구체화 또는 다른 메세지로 대체)
 * @constant
 * @author 김도희 <doheedev@gmail.com>
 */
const ADD_PROJECT_DIALOG_CONTENT_MESSAGE = <>Please enter a project name to create a new project. The project name must
    be less than ** characters.</>

/**
 * 새 프로젝트 이름을 입력받는 TextField 컴포넌트입니다.
 * 새 프로젝트 이름 입력 다이얼로그 내부에 배치합니다.
 * @constructor
 * @author 김도희 <doheedev@gmail.com>
 */
function ProjectNameInputTextField(props: { onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void }) {
    return <TextField
        autoFocus
        margin="dense"
        id="projectName"
        label="Project Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={props.onChange}
    />
}

/**
 * 프로젝트 추가 버튼 클릭 시 보여지는 다이얼로그입니다.
 * 여기서 새 프로젝트의 이름을 입력받을 수 있습니다.
 * @todo 확인 버튼 클릭 시 입력받은 프로젝트의 이름을 서버로 전송하도록 프로젝트 생성 API를 연결해야 합니다.
 * @constructor
 * @author 김도희 <doheedev@gmail.com>
 */
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
                <ProjectNameInputTextField
                    onChange={e => dispatch(ProjectAction.setNewProjectName(String(e.target.value)))}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button disabled={!newProjectName} onClick={handleClickOKButton}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}
