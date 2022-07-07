package com.example.clinicaltrialsystem.Review;

import com.example.clinicaltrialsystem.Review.Dto.CreatReviewDataDto;
import com.example.clinicaltrialsystem.Review.Exception.IllegalDtoRequestException;
import com.example.clinicaltrialsystem.Review.Exception.InternalServerException;
import com.example.clinicaltrialsystem.Review.Exception.InvalidDataNumberException;
import com.example.clinicaltrialsystem.Storage.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewDataService {
    private final ReviewDataRepository reviewDataRepository;
    private final StorageService storageService;
    public Optional<ReviewData> getReviewData(int reviewDataNumber) throws InvalidDataNumberException, InternalServerException {
        if(reviewDataNumber<0 || reviewDataRepository.count()<=reviewDataNumber){
            throw new InvalidDataNumberException();
        }
        return reviewDataRepository.findById(reviewDataNumber);
    }

    public int saveNewReviewData(CreatReviewDataDto reviewData)
            throws InternalServerException, IOException, IllegalDtoRequestException {
        if(reviewData.getNote()==null
            || reviewData.getMlResultImage()==null
            || reviewData.getOriginalImage()==null){
            throw new IllegalDtoRequestException(reviewData);
        }
        ReviewData reviewData1=reviewDataRepository.save(ReviewData.builder()
                .MLResultImageBase64(reviewData.getMlResultImage().getOriginalFilename())
                .originalImageBase64(reviewData.getOriginalImage().getOriginalFilename()).build());
        storageService.saveFile(reviewData.getMlResultImage());
        storageService.saveFile(reviewData.getOriginalImage());
        return reviewData1.getDataId();
    }


    public void deleteAll() {
        reviewDataRepository.truncate();
    }
}
