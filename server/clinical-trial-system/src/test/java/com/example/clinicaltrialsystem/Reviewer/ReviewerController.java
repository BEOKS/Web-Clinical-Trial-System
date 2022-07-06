package com.example.clinicaltrialsystem.Reviewer;

import com.example.clinicaltrialsystem.User.Reviewer.Reviewer;
import com.example.clinicaltrialsystem.User.Reviewer.ReviewerService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = com.example.clinicaltrialsystem.User.Reviewer.ReviewerController.class)
public class ReviewerController {
    @MockBean
    ReviewerService reviewerService;
    @Autowired
    MockMvc mockMvc;
    @Test
    public void createNewReviewer() throws Exception {
        mockMvc.perform(post("/reviewer/"))
                .andExpect(status().isOk());
    }
}
