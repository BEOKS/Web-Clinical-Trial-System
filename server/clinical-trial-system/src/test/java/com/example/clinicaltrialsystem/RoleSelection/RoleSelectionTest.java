package com.example.clinicaltrialsystem.RoleSelection;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

interface RoleSelectionController{
    @GetMapping("api/roleSelection")
    public ResponseEntity<?> roleSelectionRequest();
}
public class RoleSelectionTest {
}
