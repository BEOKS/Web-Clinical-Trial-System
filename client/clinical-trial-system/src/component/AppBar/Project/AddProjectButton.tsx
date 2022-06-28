import AddIcon from '@mui/icons-material/Add';
import {IconButton, Tooltip} from "@mui/material";

const AddProjectButton = () => {
    return (
        <Tooltip title="Add Project">
            <IconButton aria-label="delete" sx={{ml: 2, border: 'solid 2px #e7f5e1', color: '#e7f5e1'}}>
                <AddIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default AddProjectButton;