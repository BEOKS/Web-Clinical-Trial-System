import * as React from 'react'
import {CircularProgress, Dialog, DialogContent, Stack, Typography} from '@mui/material'

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