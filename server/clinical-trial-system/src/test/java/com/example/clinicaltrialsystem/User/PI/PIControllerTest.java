package com.example.clinicaltrialsystem.User.PI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

class PIProfile {
}
interface PIController{
    @PostMapping("/profile")
    ResponseEntity<?> createNewPIProfile(PIProfile piProfile);
    @GetMapping("/profile")
    ResponseEntity<?> getProfileBaseOnSession();
    @PutMapping("/profile")
    ResponseEntity<?> updateProfileBaseOnSession();
    @DeleteMapping("/profile")
    ResponseEntity<?> deleteProfileBaseOnSession();
}

public class PIControllerTest {
    private final PIController piController;

    public PIControllerTest(PIController piController) {
        this.piController = piController;
    }


}
