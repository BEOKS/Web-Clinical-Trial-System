package com.example.clinicaltrialsystem.Review;

import com.example.clinicaltrialsystem.Review.Dto.CreatReviewDataDto;
import com.example.clinicaltrialsystem.Review.Exception.CannotFindByReviewId;
import com.example.clinicaltrialsystem.Review.Exception.InternalServerException;
import com.example.clinicaltrialsystem.Review.Exception.InvalidDataNumberException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * 리뷰에 사용될 메타 데이터, 원본 이미지 그리고 머신러닝 결과 이미지를 처리하기 위한 컨트롤러입니다.
 */
@Controller
@RequestMapping("/api/review/data")
@Api(
        tags = "Control Review Data Information",
        description = "리뷰에 사용될 메타 데이터, 원본 이미지 그리고 머신러닝 결과 이미지를 처리하기 위한 API입니다."
)
public class ReviewDataController {
    final ReviewDataService reviewDataService;

    public ReviewDataController(ReviewDataService reviewDataService) {
        this.reviewDataService = reviewDataService;
    }
    @GetMapping("/{reviewDataNumber}")
    @ApiOperation(value = "Review 데이터 요청")
    @ApiResponses(value = {
            @ApiResponse(code=200
                    ,message = "reviewDataNumber 를 입력하여 리뷰 데이터를 요청하면, 번호에 적합한 데이터를 반환합니다." +
                    "리뷰 데이터 번호는 0번부터 시작합니다."
                    ,response = ReviewData.class),
            @ApiResponse(code=400
                    ,message = "클라이언트가 적절하지 않은 API 를 요청하지 않은 경우 발생하는 에러입니다." +
                    "전체 리뷰 데이터보다 큰 번호를 호출하는 등 잘못된 리뷰 데이터 번호를 요청하는 경우 이에 적합한" +
                    "에러 메시지를 반환합니다. "
                    ,response = String.class),
            @ApiResponse(code=500
                    ,message = "API 호출처리를 서버에서 실패한 경우 입니다. 데이터베이스 오류 등 다양한 오류가 존재 할 수 있으며" +
                    "발생한 오류 내용을 반환합니다."
                    ,response = String.class)
    })
    public ResponseEntity<?> getReviewData(@PathVariable int reviewDataNumber){
        ReviewData reviewData = null;
        try {
            reviewData = reviewDataService.getReviewData(reviewDataNumber)
                    .orElseThrow(CannotFindByReviewId::new);
        } catch (InvalidDataNumberException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        catch (InternalServerException e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }catch (CannotFindByReviewId e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
        return ResponseEntity.ok(reviewData);
    }

    @PostMapping("")
    @ApiOperation(value = "새로운 Review 데이터 생성")
    @ApiResponses(value = {
            @ApiResponse(code=200
                    ,message = "이 API 를 호출하면 새로운 Review 데이터가 가 서버에 생성되며, 생성된 Review 의 ID를 응답으로 받을 수 있습니다." +
                    "application/json 형식으로 데이터를 전송할 수 있습니다."
                    ,response = String.class),
            @ApiResponse(code=500
                    ,message = "API 호출처리를 서버에서 실패한 경우 입니다. 메모리 부족, 데이터베이스 오류 등 다양한 오류가 존재 할 수 있으며" +
                    "발생한 오류 내용을 반환합니다."
                    ,response = String.class)
    })
    public ResponseEntity<?> createNewReviewData(@RequestBody CreatReviewDataDto creatReviewDataDto){
        int newReviewDataId=0;
        try {
            newReviewDataId = reviewDataService.saveNewReviewData(creatReviewDataDto);
        } catch (InternalServerException e) {
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
        return ResponseEntity.ok(newReviewDataId);
    }
}
