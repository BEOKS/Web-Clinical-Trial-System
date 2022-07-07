package com.example.clinicaltrialsystem.Review;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "리뷰 데이터", description = "리뷰 페이지를 위한 데이터 번호, " +
        "원본 이미지와 머신러닝 결과 이미지가 포함되어 있습니다.")
public class ReviewData {
    @ApiModelProperty("아이디(데이터 번호)")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int dataId;
    @ApiModelProperty("원본 이미지, base64 형태로 인코딩되어 있어 디코딩이 필요합니다.")
    private String originalImageBase64;
    @ApiModelProperty("머신러닝 결과 이미지, base64 형태로 인코딩되어 있어 디코딩이 필요합니다.")
    private String MLResultImageBase64;

    public int getDataId() {
        return dataId;
    }

    public String getOriginalImageBase64() {
        return originalImageBase64;
    }

    public String getMLResultImageBase64() {
        return MLResultImageBase64;
    }

    public void setDataId(int dataId) {
        this.dataId = dataId;
    }

    public void setOriginalImageBase64(String originalImageBase64) {
        this.originalImageBase64 = originalImageBase64;
    }

    public void setMLResultImageBase64(String MLResultImageBase64) {
        this.MLResultImageBase64 = MLResultImageBase64;
    }
}
