import {Box, Button, Stack, Typography, styled, Divider} from "@mui/material";
import NaverLogo from '../../assets/naverLogo.svg';
import KakaoLogo from '../../assets/kakaoLogo.svg';
import GoogleLogo from '../../assets/googleLogo.svg';
import {redirectToAuthPage} from "../../Utils/Auth/Auth";

const Root = styled('div')(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function LoginWithSNS() {
    const handleClickGoogleButton = () => {
        redirectToAuthPage();
    };

    return (
        <Box mt={8}>
            <Root>
                <Divider>
                    <Typography variant="subtitle1" align="center">
                        Or Log in with SNS
                    </Typography>
                </Divider>
            </Root>
            <Stack spacing={1.5} mt={3}>
                <Button variant="contained" size="large" color="naver">
                    <img src={NaverLogo} alt="naver" width="28px"/>
                    <Box width="100%">
                        Login with Naver
                    </Box>
                </Button>
                <Button variant="contained" size="large" color="kakao">
                    <img src={KakaoLogo} alt="kakao" width="30px"/>
                    <Box width="100%">
                        Login with Kakao
                    </Box>
                </Button>
                <Button variant="contained" size="large" color="google" onClick={handleClickGoogleButton}>
                    <img src={GoogleLogo} alt="google" width="30px"/>
                    <Box width="100%">
                        Login with Google
                    </Box>
                </Button>
            </Stack>
        </Box>
    );
}