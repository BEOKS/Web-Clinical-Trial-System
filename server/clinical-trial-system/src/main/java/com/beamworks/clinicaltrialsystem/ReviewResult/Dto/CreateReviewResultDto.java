package com.beamworks.clinicaltrialsystem.ReviewResult.Dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel(value = "리뷰 결과 전달 포맷", description = "리뷰어가 남긴 데이터를 전달합니다." +
        "소요 시간(millisecond)은 performance.now()를 이용해서 JS에서 쉽게 측정가능합니다." +
        "(Ref : https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)")
@Getter
@Setter
public class CreateReviewResultDto {
    @ApiModelProperty("리뷰를 진행한 리뷰어의 아이디")
    int reviewerId;
    @ApiModelProperty("리뷰에 사용된 데이터의 아이디")
    int dataId;
    @ApiModelProperty("원본 이미지만 보고 리뷰 했을 때의 BI-RADS")
    String original_bi_rads;
    @ApiModelProperty("원본 이미지만 보고 리뷰 했을 때의 POM, (0~100)의 정수 형태")
    int originalPom;
    @ApiModelProperty("원본 이미지만 보고 리뷰 했을 때의 검증 소요 시간 : integer 형식의 milli second 값 ")
    long originalVerifyTime;
    @ApiModelProperty("AI 결과를 보고 리뷰 했을 때의 BI-RADS")
    String mlResult_bi_rads;
    @ApiModelProperty("AI 결과를 보고 리뷰 했을 때의 POM, (0~100)의 정수 형태")
    int mlResultPom;
    @ApiModelProperty("AI 결과를 보고 리뷰 했을 때의 검증 소요 시간 : integer 형식의 milli second 값 ")
    long mlResultVerifyTime;
}
