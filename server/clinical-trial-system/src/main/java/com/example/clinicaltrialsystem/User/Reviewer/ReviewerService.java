package com.example.clinicaltrialsystem.User.Reviewer;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewerService {
    private final ReviewerRepository reviewerRepository;
    public int createNewReviewer(){
        Reviewer reviewer=reviewerRepository.save(Reviewer.builder().build());
        return reviewer.getId();
    }
}
