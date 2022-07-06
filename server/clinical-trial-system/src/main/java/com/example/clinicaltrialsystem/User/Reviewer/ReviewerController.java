package com.example.clinicaltrialsystem.User.Reviewer;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@Controller
@RequestMapping("reviewer")
@Api(
        tags = "Control Reviewer Information",
        description = "리뷰어 정보 생성/조회/삭제/수정 API"
)
public class ReviewerController {
    final
    ReviewerService reviewerService;

    public ReviewerController(ReviewerService reviewerService) {
        this.reviewerService = reviewerService;
    }

    @PostMapping("")
    @ApiOperation(value = "새로운 Reviewer 생성")
    @ApiResponses(value = {
            @ApiResponse(code=200
                    ,message = "이 API 를 호출하면 새로운 Reviewer 가 서버에 생성되며, 생성된 Reviewer 의 ID를 응답으로 받을 수 있습니다."
                    ,response = CreateReviewerResponseDto.class),
            @ApiResponse(code=500
                    ,message = "API 호출처리를 서버에서 실패한 경우 입니다. 메모리 부족, 데이터베이스 오류 등 다양한 오류가 존재 할 수 있으며" +
                    "발생한 오류 내용을 반환합니다."
                    ,response = String.class)
    })
    public ResponseEntity<CreateReviewerResponseDto> createNewReviewer(){
        int newReviewerId= reviewerService.createNewReviewer();
        return ResponseEntity.ok(new CreateReviewerResponseDto(newReviewerId));
    }

}
