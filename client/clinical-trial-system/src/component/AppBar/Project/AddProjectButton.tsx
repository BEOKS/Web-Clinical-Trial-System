import AddIcon from '@mui/icons-material/Add';
import {IconButton, Tooltip} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ProjectAction} from "./ProjectReducer";

/**
 * 새 프로젝트 추가를 위한 '+' 모양의 아이콘 버튼입니다.
 * 'displaySelectProject' state를 true로 설정할 때 화면에 보여집니다.
 * 버튼에 마우스 오버 시 'Add Project' 메세지가 툴팁으로 출력되며,
 * 버튼 클릭 시 새 프로젝트 이름을 입력받는 다이얼로그를 띄웁니다.
 * @constructor
 * @author 김도희 <doheedev@gmail.com>
 */
const AddProjectButton = () => {
    const dispatch = useDispatch();
    const displaySelectProject = useSelector((state: RootState) => state.ProjectReducer.displaySelectProject);

    const handleClickAddProject = () => {
        dispatch(ProjectAction.openAddProjectDialog());
    };

    return (
        <Tooltip title="Add Project">
            <IconButton aria-label="add project"
                        onClick={handleClickAddProject}
                        sx={{
                            ml: 2, border: 'solid 2px', borderColor: 'secondary.main', color: 'secondary.main',
                            ...((!displaySelectProject) && {display: 'none'})
                        }}>
                <AddIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default AddProjectButton;