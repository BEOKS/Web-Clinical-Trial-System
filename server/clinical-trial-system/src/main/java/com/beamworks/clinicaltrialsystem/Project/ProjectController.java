package com.beamworks.clinicaltrialsystem.Project;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

interface ProjectController {
    /**
     * 프로젝트 조회 기능
     * <p>
     * 요청자의 역할에 따라 다른 프로젝트 조회 기능을 제공합니다.
     * 1. Reviewer
     * 현재 리뷰어가 참가하고 있는 프로젝트 리스트를 반환합니다.
     * 2. PI
     * 현재 PI가 관리하고 있는 프로젝트 리스트를 반환합니다.
     *
     * @return Response : 정상적인 수행인 경우 위 정보를 리스트 형태로 제공합니다.
     * 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> getProjectList();

    /**
     * 프로젝트 생성 기능
     * PI는 새로운 프로젝트를 생성 할 수 있습니다.
     *
     * @param projectName : 새로 생성할 프로젝트 이름입니다.
     * @return 처리가 성공하면 200 메시지를 반환합니다. 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> createNewProject(@PathVariable String projectName);

    /**
     * 프로젝트 정보 업데이트 기능
     * <p>
     * 사용자는 프로젝트 정보를 업데이트 할 수 있습니다.
     * TODO 스키마는 차후 업데이트 예정입니다.
     *
     * @return 처리가 성공하면 200 메시지를 반환합니다. 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> updateProjectInformation();

    /**
     * 프로젝트 삭제 기능
     * <p>
     * PI가 프로젝트를 삭제 할 수 있습니다.
     * 프로젝트 삭제 요청이 수행되면 프로젝트와 연관되어 있는 데이터도 모두 삭제됩니다.
     * 삭제 전파는 데이터베이스에서 CASCADE 를 통해서 구현합니다.
     *
     * @return 처리가 성공하면 200 메시지를 반환합니다. 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> deleteProject();

}
