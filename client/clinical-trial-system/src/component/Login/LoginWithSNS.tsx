import {Box, Button, Stack, Typography, styled, Divider} from "@mui/material";
import NaverLogo from '../../assets/naverLogo.svg';
import KakaoLogo from '../../assets/kakaoLogo.svg';
import GoogleLogo from '../../assets/googleLogo.svg';
import {redirectToAuthPage} from "../../Utils/Auth/Auth";

/**
 * SNS 로그인 섹션 컴포넌트입니다.
 * 네이버, 구글, 카카오 로그인 버튼으로 구성되어있습니다.
 * 다른 SNS 로그인 버튼 추가 시 {@link ../../assets} 폴더에 SVG 이미지를 저장하고
 * {@link ../../theme/theme.ts}에 해당 SNS 대표 색상을 등록한 후 버튼에 적용해야 합니다.
 * @todo 네이버, 카카오 로그인 API 연결 작업이 필요합니다.
 * @author 김도희 <doheedev@gmail.com>
 */
export default function LoginWithSNS() {
    const handleClickGoogleButton = () => {
        redirectToAuthPage();
    };

    return (
        <Box mt={8}>
            <Divider>
                <Typography variant="subtitle1" align="center">
                    Or Log in with SNS
                </Typography>
            </Divider>
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