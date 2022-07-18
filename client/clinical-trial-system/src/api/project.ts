const getProjectList = (onSuccess: (projectList: string[]) => void) => {
    onSuccess(['Project 1', 'Project 2', 'Project 3']);

    // TODO 프로젝트 리스트 GET API 호출
};

export {getProjectList};