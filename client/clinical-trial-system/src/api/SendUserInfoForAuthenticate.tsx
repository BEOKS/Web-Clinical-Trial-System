/**
 * 사용자 정보를 서버에 전송하여 인증을 진행합니다.
 * 인증이 완료 된다면 API를 사용할 수 있게 됩니다.
 * @param email
 * @param password
 */
import axios from "axios";

const SUCCESS_MESSAGE = "인증이 완료되었습니다.";
const FAIL_MESSAGE = "인증이 실패되었습니다. 아이디와 패스워드를 다시 확인 해 주세요";

function createFormWith(email: string, password: string) {
    const formData = new FormData()
    formData.append('username', email)
    formData.append('password', password)
    formData.append('_csrf','8faa867e-a398-44df-b12e-14a54eb78674')
    return formData;
}

export function sendUserInfoForAuthenticate(email: string, password: string) {
   fetch("http://localhost:8080/login",{
        headers:{
            "Authorization": 'Basic ' + window.btoa(email + ":" + password)
        }
   }).then(resp => {
        console.log(resp);
        if (resp.ok) {
            alert("success")
        } else {
            alert("fail")
        }

    return resp.text();
}); 
}