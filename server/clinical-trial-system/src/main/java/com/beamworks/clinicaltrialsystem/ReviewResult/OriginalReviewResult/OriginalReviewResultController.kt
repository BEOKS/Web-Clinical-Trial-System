package com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto.CreateOriginalReviewResultDto
import com.beamworks.clinicaltrialsystem.Utils.Controller.errorHandler
import io.swagger.annotations.Api
import io.swagger.annotations.ApiOperation
import io.swagger.annotations.ApiResponse
import io.swagger.annotations.ApiResponses
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/api/review/result/original")
@Api(
    tags = ["Control Original Review Result"],
    description = "원본 이미지를 이용한 리뷰 결과를 처리하기 위한 API 입니다."
)
class OriginalReviewResultController
    (private val originalReviewResultService: OriginalReviewResultService) {


    @GetMapping(value = ["/{reviewerId}/{dataId}"], produces = [MediaType.APPLICATION_JSON_VALUE])
    @ApiOperation(value = "저장된 원본 이미지 리뷰 결과를 가져옵니다.")
    @ApiResponses(
        value = [ApiResponse(
            code = 200,
            message = "정상적으로 데이터가 조회되었으며, 조회된 데이터가 반환됩니다.",
            response = OriginalReviewResult::class
        ), ApiResponse(
            code = 400,
            message = "올바르지 않은 리뷰 아이디나 데이터 아이디를 사용한 경우 발생한 요류 내용을 반환합니다.",
            response = String::class
        ), ApiResponse(
            code = 500,
            message = "API 호출처리를 서버에서 실패한 경우 입니다. 데이터베이스 오류 등 다양한 오류가 존재 할 수 있으며" +
                    "발생한 오류 내용을 반환합니다.",
            response = String::class
        )]
    )
    fun getOriginalReviewResult(@PathVariable dataId: Int,
                                @PathVariable reviewerId: Int): ResponseEntity<Any> {
        return errorHandler {
            ResponseEntity.ok(originalReviewResultService.getResultWith(dataId,reviewerId))
        }
    }

    @PostMapping(value = [""])
    @ApiOperation(value = "원본 이미지 리뷰 결과를 새로 저장합니다.")
    @ApiResponses(
        value = [ApiResponse(
            code = 200,
            message = "결과 저장이 정상적으로 처리된 경우입니다.",
        ), ApiResponse(
            code = 500,
            message = "API 호출처리를 서버에서 실패한 경우 입니다. 업로드 파일 형식이 잘못되거나" +
                    "데이터베이스 오류 등 다양한 오류가 존재 할 수 있으며" +
                    "발생한 오류 내용을 반환합니다.",
            response = String::class
        )]
    )
    fun createOriginalReviewResult(@RequestBody result: CreateOriginalReviewResultDto): ResponseEntity<Any>{
        return errorHandler {
            originalReviewResultService.saveResult(result)
            ResponseEntity.ok().build()
        }
    }
}