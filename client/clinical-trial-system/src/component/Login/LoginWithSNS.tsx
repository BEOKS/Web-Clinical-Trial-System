import { Box, Button, Stack, Typography, styled, Divider } from "@mui/material";
// import { ReactComponent as NaverLogo } from '../../assets/naverLogo.svg';
// import { ReactComponent as KakaoLogo } from '../../assets/kakaoLogo.svg';
// import { ReactComponent as GoogleLogo } from '../../assets/googleLogo.svg';

// import NaverLogo from '../../assets/naverLogo.svg';
// import KakaoLogo from '../../assets/naverLogo.svg';
// import GoogleLogo from '../../assets/naverLogo.svg';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function LoginWithSNS() {
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
                    {/*<NaverLogo width="30px" />*/}
                    {/*<img src={NaverLogo} alt='' width="30px"/>*/}
                    <Box width="100%">
                        Login with Naver
                    </Box>
                </Button>
                <Button variant="contained" size="large" color="kakao">
                    {/*<KakaoLogo width="30px" />*/}
                    {/*<img src={KakaoLogo} alt='' width="30px"/>*/}
                    <Box width="100%">
                        Login with Kakao
                    </Box>
                </Button>
                <Button variant="contained" size="large" color="google">
                    {/*<GoogleLogo width="30px" />*/}
                    {/*<img src={GoogleLogo} alt='' width="30px"/>*/}
                    <Box width="100%">
                        Login with Google
                    </Box>
                </Button>
            </Stack>
        </Box>
    );
}