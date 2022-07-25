/**
 * @file 이메일 로그인 섹션과 관련된 코드를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 */
import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {LoginAction} from "./LoginReducer";
import {ChangeEvent} from "react";
import {sendUserInfoForAuthenticate} from "../../api/SendUserInfoForAuthenticate";

/**
 * 이메일 입력 TextField 컴포넌트입니다.
 * @param props.onChange - change 이벤트 발생 시 입력한 값을 [email]{@link RootState.LoginReducer.email}에 저장합니다.
 * @param props.value - [email]{@link RootState.LoginReducer.email}을 TextField의 값으로 설정합니다.
 * @param props.emailValidation - 값이 false일 때 TextField 컴포넌트를 에러 상태로 변경하고 helper 메세지를 출력합니다.
 */
function EmailInputTextField(props: {
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    value: string, emailValidation: boolean
}) {
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

/**
 * 비밀번호 입력 TextField 컴포넌트입니다. 보안을 위해 input type을 password로 설정하므로 입력 값이 점으로 보입니다.
 * @param props.onChange - change 이벤트 발생 시 입력한 값을 [password]{@link RootState.LoginReducer.password}에 저장합니다.
 * @param props.value - [password]{@link RootState.LoginReducer.password}를 TextField의 값으로 설정합니다.
 */
function PasswordInputTextField(props: {
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    value: string
}) {
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

/**
 * 이메일 로그인 섹션 컴포넌트입니다.
 * 이메일과 비밀번호 입력 후 로그인 버튼을 클릭하면 로그인이 진행됩니다.
 * @todo 비밀번호 찾기, 회원가입 링크는 UI만 만들어놓은 상태이므로 페이지 개발 및 해당 페이지로 링크를 연결하는 작업이 필요합니다.
 */
export default function LoginWithEmail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const email = useSelector((state: RootState) => state.LoginReducer.email);
    const password = useSelector((state: RootState) => state.LoginReducer.password);
    const emailValidation = useSelector((state: RootState) => state.LoginReducer.emailValidation);

    // 이메일 유효성 검사
    const isEmailValidate = (email: string) => {
        const emailRegex =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const result = emailRegex.test(email);
        dispatch(LoginAction.setEmailValidation(result));
        return result;
    };

    const handleEmailLogin = () => {
        // 간편 인증을 위해 이메일 형식 확인 기능을 비활성화합니다.
        // if (isEmailValidate(email)) {
        //     dispatch(DrawerAction.displayMenuButton());
        //     navigate('/select-role');
        // }
        sendUserInfoForAuthenticate(email,password)
    };

    return (
        <Box>
            <Typography variant="h4" align="center">
                Log In
            </Typography>
            <Stack spacing={1.5} mt={3}>
                <EmailInputTextField onChange={e => dispatch(LoginAction.setEmail(e.target.value))}
                                     value={email} emailValidation={emailValidation}/>
                <PasswordInputTextField onChange={e => dispatch(LoginAction.setPassword(e.target.value))}
                                        value={password}/>
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