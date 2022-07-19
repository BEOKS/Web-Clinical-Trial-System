/**
 * 프로젝트 리스트를 받아오기 위한 API입니다.
 * @todo 현재 프로젝트 리스트에 dummy text를 하드코딩해둔 상태이므로 백엔드 측에서 API 작성이 완료된다면 API 호출 코드를 작성해야 합니다.
 * @param onSuccess
 * @author 김도희 <doheedev@gmail.com>
 */
const getProjectList = (onSuccess: (projectList: string[]) => void) => {
    onSuccess(['Project 1', 'Project 2', 'Project 3']);

    // TODO 프로젝트 리스트 GET API 호출
};

export {getProjectList};