import AddIcon from '@mui/icons-material/Add';
import {IconButton, Tooltip} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const AddProjectButton = () => {
    const displaySelectProject = useSelector((state: RootState) => state.ProjectReducer.displaySelectProject);

    return (
        <Tooltip title="Add Project">
            <IconButton aria-label="add project"
                        sx={{ml: 2, border: 'solid 2px', borderColor: 'secondary.main', color: 'secondary.main',
                            ...((!displaySelectProject) && {display: 'none'})}}>
                <AddIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default AddProjectButton;