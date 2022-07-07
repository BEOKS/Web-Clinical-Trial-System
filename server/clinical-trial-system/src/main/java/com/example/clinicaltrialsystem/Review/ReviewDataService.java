package com.example.clinicaltrialsystem.Review;

import com.example.clinicaltrialsystem.Review.Dto.CreatReviewDataDto;
import com.example.clinicaltrialsystem.Review.Exception.InternalServerException;
import com.example.clinicaltrialsystem.Review.Exception.InvalidDataNumberException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewDataService {
    private final ReviewDataRepository reviewDataRepository;

    public Optional<ReviewData> getReviewData(int reviewDataNumber) throws InvalidDataNumberException, InternalServerException {
        if(reviewDataNumber<0 || reviewDataRepository.count()<=reviewDataNumber){
            throw new InvalidDataNumberException();
        }
        return reviewDataRepository.findById(reviewDataNumber);
    }

    public int saveNewReviewData(CreatReviewDataDto reviewData) throws InternalServerException{
        ReviewData reviewData1=reviewDataRepository.save(ReviewData.builder()
                .MLResultImageBase64(reviewData.getMLResultImageBase64())
                .originalImageBase64(reviewData.getOriginalImageBase64()).build());
        return reviewData1.getDataId();
    }
}
