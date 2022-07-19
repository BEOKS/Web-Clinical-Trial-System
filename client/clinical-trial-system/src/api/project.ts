/**
 * 프로젝트 리스트를 받아오기 위한 API입니다.
 * 수신한 프로젝트 리스트 정보를 사용하기 위해서 비동기로 호출되는 onSuccess 화살표 함수를 사용할 수 있습니다.
 * @todo 현재 프로젝트 리스트에 dummy text를 하드코딩해둔 상태이므로 백엔드 측에서 API 작성이 완료된다면 API 호출 코드를 작성해야 합니다.
 * @param onSuccess - 프로젝트 리스트를 성공적으로 받아올 경우 프로젝트 리스트를 파라미터로 넘겨주는 화살표 함수입니다. 만약 프로젝트 리스트를 가져오는데 에러가 발생했다면 호출되지 않습니다.
 * @author 김도희 <doheedev@gmail.com>
 */
const getProjectList = (onSuccess: (projectList: string[]) => void) => {
    onSuccess(['Project 1', 'Project 2', 'Project 3']);

    // TODO 프로젝트 리스트 GET API 호출
};

export {getProjectList};