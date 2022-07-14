import { Stack, Typography, TextField, Button, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {LoginAction} from "./LoginReducer";
import {DrawerAction} from "../Drawer/DrawerReducer";

function EmailInputTextField(props: { onChange: (e : any) => void, value: string, emailValidation: boolean }) {
    return <TextField
        id="email"
        label="Email"
        variant="outlined"
        autoComplete="off"
        type="email"
        size="small"
        onChange={props.onChange}
        value={props.value}
        error={(!props.emailValidation && true)}
        helperText={(!props.emailValidation && "Not a valid email format.")}
    />;
}

function PasswordInputTextField(props: { onChange: (e : any) => void, value: string }) {
    return <TextField
        id="password"
        label="Password"
        variant="outlined"
        autoComplete="off"
        type="password"
        size="small"
        onChange={props.onChange}
        value={props.value}
    />;
}

export default function LoginWithEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector((state: RootState) => state.LoginReducer.email);
    const password = useSelector((state: RootState) => state.LoginReducer.password);
    const emailValidation = useSelector((state: RootState) => state.LoginReducer.emailValidation);

    // 이메일 유효성 검사
    const isEmailValidate = (email:string) => {
        const emailRegex =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const result = emailRegex.test(email);
        dispatch(LoginAction.setEmailValidation(result));
        return result;
    };

    const handleEmailLogin = () => {
        if (isEmailValidate(email)) {
            dispatch(DrawerAction.displayMenuButton());
            navigate('/select-role');
        }
    };

    return (
        <Box>
            <Typography variant="h4" align="center">
                Log In
            </Typography>
            <Stack spacing={1.5} mt={3}>
                <EmailInputTextField onChange={e => {
                    dispatch(LoginAction.setEmail(e.target.value))
                }} value={email} emailValidation={emailValidation}/>
                <PasswordInputTextField onChange={e => {
                    dispatch(LoginAction.setPassword(e.target.value))
                }} value={password}/>
                <Button variant="contained" size="large" onClick={() => handleEmailLogin()}>
                    Log In
                </Button>
            </Stack>
            <Typography align="center" mt={3}>
                <Link href="#" underline="hover">Forgot Password?</Link><br/>
                No Account? <Link component={RouterLink} to="/signup" underline="hover">Create One.</Link>
            </Typography>
        </Box>
    );
}