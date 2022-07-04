/**
 * Project Controller Test
 * @Author : Jaeseong Lee, lee01042000@gmail.com
 *
 * @Reference
 * 1. Testing OAuth 2.0, https://docs.spring.io/spring-security/reference/servlet/test/mockmvc/oauth2.html
 * 2.
 */
package com.example.clinicaltrialsystem.Project;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@WebMvcTest
public class ProjectControllerTest {
    public static final String USER_LOGIN_BUT_NO_SELECTED_ROLE = "User login but, no selected role";
    public static final String UNAUTHORIZED_RESPONSE_MSG = "Unauthorized Request, Only Project Manager(PI) can request this api";
    private MockMvc mockMvc;
    @MockBean
    private ProjectService projectService;


    public List<Project> mockProjectList;
    private String mockProjectListJsonString;

    @BeforeEach
    void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(new BasicProjectController()).build();
        mockProjectList = createMockListWith(() -> Project.createSampleProject());
        mockProjectListJsonString = getMockProjectListJsonString();

    }

    private List<Project> createMockListWith(Supplier<Project> createMockProject) {
        return Stream.generate(createMockProject).limit(4).collect(Collectors.toList());
    }

    private String getMockProjectListJsonString() {
        return mockProjectList.stream().map(Project::toJsonNode)
                .collect(Collectors.toList()).toString();
    }

    @Test
    @Tag("Request project list")
    @DisplayName("PI")
    @WithMockUser(roles = "PI")
    public void getProjectListByPI() throws Exception {
        Mockito.when(projectService.getProjectList()).thenReturn(mockProjectList);
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(mockProjectListJsonString));
    }

    @Test
    @Tag("Request project information")
    @DisplayName("Reviewer")
    @WithMockUser(roles = "Reviewer")
    public void getProjectListByReviewer() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(UNAUTHORIZED_RESPONSE_MSG));
    }

    @Test
    @Tag("Request project information")
    @DisplayName("Unauthorized")
    @WithMockUser(roles = "null")
    public void getProjectListByUnauthorized() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(UNAUTHORIZED_RESPONSE_MSG));
    }

    @Test
    @Tag("Request project information")
    @DisplayName("No Role User")
    public void getProjectListByNoRoleUser() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(USER_LOGIN_BUT_NO_SELECTED_ROLE));
    }

    @Test
    @Tag("Request project information")
    @DisplayName("project configuration")
    @WithMockUser("PI")
    public void getProjectConfigurationByPI() throws Exception {
        Mockito.when(projectService.getProjectList()).thenReturn(mockProjectList);
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(mockProjectListJsonString));
    }

    @Test
    @Tag("Request project information")
    @DisplayName("invalid project information request")
    public void getProjectConfigurationByUnauthorizedOrElse() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/project"))
                .andExpect(MockMvcResultMatchers.status().isUnauthorized())
                .andExpect(MockMvcResultMatchers.content().contentType("text/html;charset=UTF-8"))
                .andExpect(MockMvcResultMatchers.content().string(UNAUTHORIZED_RESPONSE_MSG));
    }

    @Test
    @Tag("Create new project")
    @DisplayName("PI")
    public void createNewProjectByPI() {

    }

    @Test
    @Tag("Create new project")
    @DisplayName("Unauthorized")
    public void createNewProjectByUnauthorized() {

    }

    @Test
    @Tag("Create new project")
    @DisplayName("No Role or Reviewer")
    public void createNewProjectByElse() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("Change Project Name")
    public void changeProjectName() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("Migrate project manager(PI)")
    public void migrateProjectManager() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("add project reviewer by PI")
    public void appendNewReviewerInProject() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("add already in reviewer by PI")
    public void appendAlreadyProjectInReviewer() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("add invalid user by PI")
    public void appendInvalidUserOrReviewer() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("delete Reviewer in Project by PI")
    public void deleteReviewerInProjectByPI() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("update project information by Unauthorized or Else")
    public void updateProjectByUnauthorizedOrElse() {

    }

    @Test
    @Tag("Update project information")
    @DisplayName("delete Reviewer in Project by Unauthorized or Else")
    public void deleteReviewerInProjectByUnauthorizedOrElse() {

    }

    @Test
    @Tag("Delete project")
    @DisplayName("delete project by PI")
    public void deleteProjectByPI() {

    }

    @Test
    @Tag("Delete project")
    @DisplayName("delete project by unauthorized or else")
    public void deleteProjectByUnauthorizedAndElse() {

    }
}
