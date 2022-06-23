import axios from 'axios'
enum Role{
    PI,Reviewer
}
export default function selectRoleRequest(role : Role,
    onSuccess : (response : any)=>void,
    onFail : (erorr : any)=>void,
    userDummyRequest : boolean=true,
    ROLE_URL='api/roleSelection',
    ){ßß

    if(userDummyRequest){
        onSuccess({
            data : 'success'
        })
    }else{
        axios.post(ROLE_URL,{
            'role' : role
        }).then(onSuccess).catch(onFail)
    }
}

