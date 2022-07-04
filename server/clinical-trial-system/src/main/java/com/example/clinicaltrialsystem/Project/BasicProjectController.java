package com.example.clinicaltrialsystem.Project;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("Project")
public
class BasicProjectController implements ProjectController {
    @GetMapping("/")
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
    @Override
    public ResponseEntity<?> deleteProject() {
        return null;
    }
}
