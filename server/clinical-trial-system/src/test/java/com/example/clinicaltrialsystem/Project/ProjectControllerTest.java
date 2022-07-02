package com.example.clinicaltrialsystem.Project;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.bind.annotation.*;

interface ProjectController{
    /**
     * 프로젝트 조회 기능
     *
     * 요청자의 역할에 따라 다른 프로젝트 조회 기능을 제공합니다.
     * 1. Reviewer
     * 현재 리뷰어가 참가하고 있는 프로젝트 리스트를 반환합니다.
     * 2. PI
     * 현재 PI가 관리하고 있는 프로젝트 리스트를 반환합니다.
     *
     * @return Response : 정상적인 수행인 경우 위 정보를 리스트 형태로 제공합니다.
     *  에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
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
     *
     * 사용자는 프로젝트 정보를 업데이트 할 수 있습니다.
     * TODO 스키마는 차후 업데이트 예정입니다.
     * @return 처리가 성공하면 200 메시지를 반환합니다. 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> updateProjectInformation();

    /**
     * 프로젝트 삭제 기능
     *
     * PI가 프로젝트를 삭제 할 수 있습니다.
     * 프로젝트 삭제 요청이 수행되면 프로젝트와 연관되어 있는 데이터도 모두 삭제됩니다.
     * 삭제 전파는 데이터베이스에서 CASCADE 를 통해서 구현합니다.
     *
     * @return 처리가 성공하면 200 메시지를 반환합니다. 에러가 발생한 경우 에러 메시지가 포함된 응답이 전송됩니다.
     */
    ResponseEntity<?> deleteProject();

}
@Controller
@RequestMapping("Project")
class BasicProjectController implements ProjectController{
    @GetMapping("/")
    @Override
    public ResponseEntity<?> getProjectList() {
        return null;
    }
    @PostMapping("/{projectName}")
    @Override
    public ResponseEntity<?> createNewProject( @PathVariable String projectName) {
        return null;
    }
    @PutMapping("/")
    @Override
    public ResponseEntity<?> updateProjectInformation() {
        return null;
    }
    @DeleteMapping("/")
    @Override
    public ResponseEntity<?> deleteProject() {
        return null;
    }
}
interface ProjectService{

}
@Service
class ProjectServiceImpl implements ProjectService{

}

@WebMvcTest(ProjectController.class)
@EnableAutoConfiguration
public class ProjectControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private ProjectService projectService;
    @Test
    @Tag("Request project information")
    @DisplayName("PI")
    public void getProjectListByPI(){

    }
    @Test
    @Tag("Request project information")
    @DisplayName("Reviewer")
    public void getProjectListByReviewer(){

    }
    @Test
    @Tag("Request project information")
    @DisplayName("Unauthorized")
    public void getProjectListByUnauthorized(){

    }
    @Test
    @Tag("Request project information")
    @DisplayName("No Role User")
    public void getProjectListByNoRoleUser(){

    }
    @Test
    @Tag("Request project information")
    @DisplayName("project configuration")
    public void getProjectConfigurationByPI(){

    }
    @Test
    @Tag("Request project information")
    @DisplayName("invalid project information request")
    public void getProjectConfigurationByUnauthorizedOrElse(){

    }
    @Test
    @Tag("Create new project")
    @DisplayName("PI")
    public void createNewProjectByPI(){

    }
    @Test
    @Tag("Create new project")
    @DisplayName("Unauthorized")
    public void createNewProjectByUnauthorize(){

    }
    @Test
    @Tag("Create new project")
    @DisplayName("No Role or Reviewer")
    public void createNewProjectByElse(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("Change Project Name")
    public void changeProjectName(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("Migrate project manager(PI)")
    public void migrateProjectManager(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("add project reviewer by PI")
    public void appendNewReviewerInProject(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("add already in reviewer by PI")
    public void appendAlreadyProjectInReviewer(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("add invalid user by PI")
    public void appendInvalidUserOrReviewer(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("delete Reviewer in Project by PI")
    public void deleteReviewerInProjectByPI(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("update project information by Unauthorized or Else")
    public void updateProjectByUnauthorizedOrElse(){

    }
    @Test
    @Tag("Update project information")
    @DisplayName("delete Reviewer in Project by Unauthorized or Else")
    public void deleteReviewerInProjectByUnauthorizedOrElse(){

    }
    @Test
    @Tag("Delete project")
    @DisplayName("delete project by PI")
    public void deleteProjectByPI(){

    }
    @Test
    @Tag("Delete project")
    @DisplayName("delete project by unauthorized or else")
    public void deleteProjectByUnauthorizedAndElse(){

    }
}
