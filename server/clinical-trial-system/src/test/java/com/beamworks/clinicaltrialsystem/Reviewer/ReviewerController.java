package com.beamworks.clinicaltrialsystem.Reviewer;

import com.beamworks.clinicaltrialsystem.User.Reviewer.ReviewerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = com.beamworks.clinicaltrialsystem.User.Reviewer.ReviewerController.class)
public class ReviewerController {
    @MockBean
    ReviewerService reviewerService;
    @Autowired
    MockMvc mockMvc;

    @Test
    public void createNewReviewer() throws Exception {
        when(reviewerService.createNewReviewer()).thenReturn(123);
        mockMvc.perform(post("/api/reviewer"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.reviewerId").value(123));
    }
}
