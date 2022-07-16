package com.beamworks.clinicaltrialsystem.User.Reviewer;

import com.beamworks.clinicaltrialsystem.User.Reviewer.Dto.CreateReviewerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewerService {
    private final ReviewerRepository reviewerRepository;
    public int createNewReviewer(CreateReviewerDto createReviewerDto){
        Reviewer reviewer=reviewerRepository.save(createReviewerDto.toReviewerEntity());
        return reviewer.getId();
    }
}
