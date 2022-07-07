package com.example.clinicaltrialsystem.Review;

import com.example.clinicaltrialsystem.Review.Dto.CreatReviewDataDto;
import com.example.clinicaltrialsystem.Review.Exception.CannotFindByReviewId;
import com.example.clinicaltrialsystem.Review.Exception.IllegalDtoRequestException;
import com.example.clinicaltrialsystem.Review.Exception.InternalServerException;
import com.example.clinicaltrialsystem.Review.Exception.InvalidDataNumberException;
import com.example.clinicaltrialsystem.Storage.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class ReviewDataService {
    private final ReviewDataRepository reviewDataRepository;
    private final StorageService storageService;
    public ReviewData getReviewData(int reviewDataNumber) throws InvalidDataNumberException, InternalServerException, CannotFindByReviewId {
        if(reviewDataNumber<0 || reviewDataRepository.count()<=reviewDataNumber){
            throw new InvalidDataNumberException();
        }
        Optional<ReviewData> reviewData=reviewDataRepository.findById(reviewDataNumber);
        if (reviewData.isEmpty()){
            throw new CannotFindByReviewId();
        }
        return reviewData.get();
    }

    public int saveNewReviewData(CreatReviewDataDto reviewData)
            throws InternalServerException, IOException, IllegalDtoRequestException {
        if(reviewData.getNote()==null
            || reviewData.getMlResultImage()==null
            || reviewData.getOriginalImage()==null){
            throw new IllegalDtoRequestException(reviewData);
        }
        ReviewData reviewData1=reviewDataRepository.save(ReviewData.builder()
                .originalImageName(reviewData.getMlResultImage().getOriginalFilename())
                .mlResultImageName(reviewData.getOriginalImage().getOriginalFilename())
                .note(reviewData.getNote()).build());
        storageService.saveFile(reviewData.getMlResultImage());
        storageService.saveFile(reviewData.getOriginalImage());
        return reviewData1.getDataId();
    }


    public void deleteAll() {
        reviewDataRepository.truncate();
    }

    public byte[] getOriginalImageBytes(int reviewDataNumber)
            throws InvalidDataNumberException, InternalServerException,
            CannotFindByReviewId, IOException {
        return getImageBytes(reviewDataNumber,(reviewData -> reviewData.getOriginalImageName()));
    }

    private byte[] getImageBytes(int reviewDataNumber, Function<ReviewData,String> function) throws InvalidDataNumberException, InternalServerException, CannotFindByReviewId, IOException {
        ReviewData reviewData=getReviewData(reviewDataNumber);
        String image=function.apply(reviewData);
        File file=storageService.getFile(image);
        return StreamUtils.copyToByteArray(new FileInputStream(file));
    }

    public byte[] getMLResultImage(int reviewDataNumber) throws
            InvalidDataNumberException, InternalServerException,
            CannotFindByReviewId, IOException {
        return getImageBytes(reviewDataNumber,(reviewData -> reviewData.getMlResultImageName()));
    }

    public int[] getIdLists() {
        return reviewDataRepository.selectAllDataId();
    }
}
