package com.example.clinicaltrialsystem.Review.Dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "리뷰 데이터 생성 포맷", description = "리뷰 페이지를 위한 " +
        "원본 이미지와 머신러닝 결과 이미지가 포함되어 있습니다.")
public class CreatReviewDataDto {
    @ApiModelProperty("원본 이미지, base64 형태로 인코딩되어 있어 디코딩이 필요합니다.")
    private String originalImageBase64;
    @ApiModelProperty("머신러닝 결과 이미지, base64 형태로 인코딩되어 있어 디코딩이 필요합니다.")
    private String MLResultImageBase64;

    public CreatReviewDataDto(String originalImageBase64, String MLResultImageBase64) {
        this.originalImageBase64 = originalImageBase64;
        this.MLResultImageBase64 = MLResultImageBase64;
    }

    public String getOriginalImageBase64() {
        return originalImageBase64;
    }

    public String getMLResultImageBase64() {
        return MLResultImageBase64;
    }

    public void setOriginalImageBase64(String originalImageBase64) {
        this.originalImageBase64 = originalImageBase64;
    }

    public void setMLResultImageBase64(String MLResultImageBase64) {
        this.MLResultImageBase64 = MLResultImageBase64;
    }
}
