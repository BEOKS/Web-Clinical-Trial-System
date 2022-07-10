package com.beamworks.clinicaltrialsystem.Project;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("Project")
public
class BasicProjectController implements ProjectController {
    @GetMapping("/")
    @ApiResponse(code=200, message = "Return Project List",response = Project.class)
    @Override
    public ResponseEntity<?> getProjectList() {
        return null;
    }

    @PostMapping("/{projectName}")
    @Override
    public ResponseEntity<?> createNewProject(@PathVariable String projectName) {
        return null;
    }

    @PutMapping("/")
    @Override
    public ResponseEntity<?> updateProjectInformation() {
        return null;
    }


    @DeleteMapping("/")
    @ApiResponses(value = {
            @ApiResponse(code=400, message = "This is a bad request, please stick to the API description"),
            @ApiResponse(code=401, message = "Your request cannot be authorized.")
    })
    @Override
    public ResponseEntity<?> deleteProject() {
        return null;
    }
}
