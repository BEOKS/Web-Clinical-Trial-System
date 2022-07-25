import * as React from 'react'
import {CircularProgress, Dialog, DialogContent, Stack, Typography} from '@mui/material'

/**
 * 로그인 상태를 확인하는 동안 띄울 로딩 컴포넌트입니다.
 * @author 김도희 <doheedev@gmail.com>
 */
export default function LoadingPage() {
    return (
        <Dialog open={true}>
            <DialogContent>
                <Stack alignItems="center">
                    <CircularProgress sx={{m: 2}}/>
                    <Typography margin={2}>
                        사용자 정보를 확인중입니다.
                    </Typography>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}