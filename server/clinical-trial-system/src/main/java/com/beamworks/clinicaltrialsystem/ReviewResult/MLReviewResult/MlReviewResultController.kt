package com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult

import io.swagger.annotations.Api
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/api/review/result/ml")
@Api(
    tags = ["Control ML Review Result"],
    description = "머신러닝 이미지를 이용한 리뷰 결과를 처리하기 위한 API 입니다."
)
class MlReviewResultController
    (private val mlReviewResultService: MLReviewResultService) {


}