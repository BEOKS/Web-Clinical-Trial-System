package com.example.clinicaltrialsystem.Reviewer;

import com.example.clinicaltrialsystem.User.Reviewer.Reviewer;
import com.example.clinicaltrialsystem.User.Reviewer.ReviewerRepository;
import com.example.clinicaltrialsystem.User.Reviewer.ReviewerService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ReviewerServiceTest {
    @InjectMocks
    private ReviewerService reviewerService;

    @MockBean
    private ReviewerRepository reviewerRepository;
    @Test
    public void createReviewer(){
//        Reviewer reviewer=createReviewerEntity();

    }
}
