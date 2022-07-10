package com.beamworks.clinicaltrialsystem.ReviewData;

import com.beamworks.clinicaltrialsystem.ReviewData.Dto.CreatReviewDataDto;
import com.beamworks.clinicaltrialsystem.ReviewData.Exception.CannotFindByReviewId;
import com.beamworks.clinicaltrialsystem.ReviewData.Exception.IllegalDtoRequestException;
import com.beamworks.clinicaltrialsystem.ReviewData.Exception.InternalServerException;
import com.beamworks.clinicaltrialsystem.Storage.ImageFileStorageService;
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
    private final ImageFileStorageService storageService;
    public ReviewData getReviewData(int reviewDataNumber) throws CannotFindByReviewId {
        Optional<ReviewData> reviewData=reviewDataRepository.findById(reviewDataNumber);
        if (reviewData.isEmpty()){
            throw new CannotFindByReviewId();
        }
        return reviewData.get();
    }

    public int saveNewReviewData(CreatReviewDataDto reviewDataDto)
            throws IOException, IllegalDtoRequestException {
        if(reviewDataDto.hasEmptyValue()){
            throw new IllegalDtoRequestException(reviewDataDto);
        }
        ReviewData reviewData1=reviewDataRepository.save(reviewDataDto.toReviewData());
        storageService.saveFile(reviewDataDto.getMlResultImage());
        storageService.saveFile(reviewDataDto.getOriginalImage());
        return reviewData1.getDataId();
    }



    public void deleteAll() {
        storageService.deleteAll();
        reviewDataRepository.truncate();
    }

    private byte[] getImageBytes(int reviewDataNumber, Function<ReviewData,String> function)
            throws  CannotFindByReviewId, IOException {
        ReviewData reviewData=getReviewData(reviewDataNumber);
        String image=function.apply(reviewData);
        File file=storageService.getFile(image);
        return StreamUtils.copyToByteArray(new FileInputStream(file));
    }

    public byte[] getOriginalImageBytes(int reviewDataNumber) throws CannotFindByReviewId, IOException {
        return getImageBytes(reviewDataNumber,(reviewData -> reviewData.getOriginalImageName()));
    }

    public byte[] getMLResultImage(int reviewDataNumber) throws CannotFindByReviewId, IOException {
        return getImageBytes(reviewDataNumber,(reviewData -> reviewData.getMlResultImageName()));
    }

    public int[] getIdLists() {
        return reviewDataRepository.selectAllDataId();
    }
}
