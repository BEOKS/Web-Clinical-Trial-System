package com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult

import com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult.Dto.CreateMLReviewResultDto
import com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult.OriginalReviewResult
import com.beamworks.clinicaltrialsystem.Utils.Controller.errorHandler
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/api/review/result/ml")
@Api(
    tags = ["Control ML Review Result"],
    description = "머신러닝 이미지를 이용한 리뷰 결과를 처리하기 위한 API 입니다."
)
class MlReviewResultController
    (private val mlReviewResultService: MLReviewResultService) {

    @GetMapping(value = ["/{reviewerId}/{dataId}"])
    @ApiOperation(value = "저장된 머신러닝 리뷰 결과를 가져옵니다.")
    @ApiResponses(
        value = [ApiResponse(
            code = 200,
            message = "정상적으로 데이터가 조회되었으며, 조회된 데이터가 반환됩니다.",
            response = MLReviewResult::class
        ), ApiResponse(
            code = 400,
            message = "올바르지 않은 리뷰 아이디나 데이터 아이디를 사용한 경우 발생한 요류 내용을 반환합니다.",
            response = String::class
        )]
    )
    fun getMLReviewResult(@PathVariable dataId: Int,
                          @PathVariable reviewerId: Int):ResponseEntity<Any>{
        return errorHandler { ResponseEntity.ok(mlReviewResultService.getResultWith(dataId,reviewerId)) }
    }

    @PostMapping(value = [""])
    @ApiOperation(value = "머신러닝 리뷰 결과를 저장합니다.")
    @ApiResponses(
        value = [ApiResponse(
            code = 200,
            message = "정상적으로 데이터가 조회되었으며, 조회된 데이터가 반환됩니다.",
            response = MLReviewResult::class
        ), ApiResponse(
            code = 500,
            message = "저장시 서버에서 발생한 오류 내용을 반환합니다.",
            response = String::class
        )]
    )
    fun saveMLReviewResult(@RequestBody createMLReviewResultDto: CreateMLReviewResultDto):ResponseEntity<Any>{
        return errorHandler {
            mlReviewResultService.saveResult(createMLReviewResultDto)
            ResponseEntity.ok("머신러닝 리뷰 결과가 정상적으로 저장되었습니다.")
        }
    }

}