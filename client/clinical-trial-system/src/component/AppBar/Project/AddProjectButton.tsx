import AddIcon from '@mui/icons-material/Add';
import {IconButton, Tooltip} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {ProjectAction} from "./ProjectReducer";

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