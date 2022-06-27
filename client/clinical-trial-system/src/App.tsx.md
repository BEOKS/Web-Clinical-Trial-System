# App 
사용자가 처음으로 진입하는 시작점입니다.
진입 시 사용자는 아래 3가지 상태일 수 있습니다.
이 페이지는 사용자의 상태에 따라 적절하게 다른 페이지로 
전환(라우팅)하는 역할을 수행합니다.

## User state
### 1. Not Login
사용자의 브라우저에서 로그인을 한 적이 없거나 세션 만료, 토큰 삭제 등 인증이 
되어 있지 않은 상태를 의미합니다. 이 때는 구글 로그인 페이지로 리다이렉션 하도록 합니다.
### 2. New User
사용자가 로그인을 통해 인증이 완료되었지만, 이전에 로그인 한적이 없는 최초의 가입자입니다.
이 때는 역할 선택 페이지로 넘어가서 역할을 선택하도록 안내합니다.
### 3. Existing user
사용자가 로그인을 통해 인증이 되었고 기존에 로그인한 적이 있는 사용자입니다.
이 때는 메인 페이지로 이동하도록 합니다. 
## Related Code
1. [Util/Auth.ts](Utils/Auth/Auth.ts) : 사용자의 로그인 여부, 리다이렉션을 위한 함수 모듈
2. [App.tsx](App.tsx) : 메인 페이지
3. [App.test.tsx](App.test.tsx) : 테스트 페이지
4. [Main.tsx](component/Main/Main.tsx) : 메인 페이지
5. [RoleSelection.tsx](component/RoleSelection/RoleSelection.test.tsx) : 역할 선택 페이지