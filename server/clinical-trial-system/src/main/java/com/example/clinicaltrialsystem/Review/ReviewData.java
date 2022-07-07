package com.example.clinicaltrialsystem.Review;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ApiModel(value = "리뷰 데이터", description = "리뷰 페이지를 위한 데이터 번호, " +
        "원본 이미지와 머신러닝 결과 이미지가 포함되어 있습니다.")
public class ReviewData {
    @ApiModelProperty("아이디(데이터 번호)")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviewDataSeq")
    @SequenceGenerator(initialValue = 1,sequenceName = "reviewDataSeq", allocationSize = 1, name = "reviewDataSeq")
    private int dataId;
    @ApiModelProperty("원본 이미지 파일명")
    private String originalImageName;
    @ApiModelProperty("머신러닝 결과 이미지 파일명")
    private String mlResultImageName;
    @ApiModelProperty("리뷰 데이터 부가 설명")
    private String note;
}
