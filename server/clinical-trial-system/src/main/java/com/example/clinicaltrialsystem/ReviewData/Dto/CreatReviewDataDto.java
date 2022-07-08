package com.example.clinicaltrialsystem.ReviewData.Dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@ApiModel(value = "리뷰 데이터 생성 포맷", description = "리뷰 페이지를 위한 " +
        "원본 이미지와 머신러닝 결과 이미지가 포함되어 있습니다.")
@Getter
@Setter
public class CreatReviewDataDto {
    @ApiModelProperty("리뷰에 필요한 의료 영상 원본 이미지")
    private MultipartFile originalImage;
    @ApiModelProperty("인공지능 리뷰에 필요한 AI 처리 결과 이미지")
    private MultipartFile mlResultImage;
    @ApiModelProperty("리뷰 데이터와 관련된 추가적인 정보")
    private String note;

    @Override
    public String toString() {
        return "CreatReviewDataDto{" +
                "   \noriginalImage=" + originalImage +
                ",  \nmlResultImage=" + mlResultImage +
                ",  \nnote=" + note + '\n' +
                '}';
    }
}
