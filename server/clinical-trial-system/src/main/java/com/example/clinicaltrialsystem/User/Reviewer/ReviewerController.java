package com.example.clinicaltrialsystem.User.Reviewer;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("reviewer")
@Api(
        tags = "Control Reviewer Information",
        description = "리뷰어 정보 생성/조회/ß삭제/수정 API"
)
public class ReviewerController {
    @PostMapping("")
    @ApiResponse(code=200,message = "새로운 리뷰어가 정상적으로 생성된 경우 리뷰어 아이디를 반환합니다.",response = String.class)
    public ResponseEntity<String> createNewReviewer(){
        return new ResponseEntity<String>(HttpStatus.ACCEPTED);
    }

    @GetMapping("")
    @ApiResponse(code=200,message = "생성된 모든 리뷰어 정보를 가져옵니다.",response = Reviewer.class)
    public Reviewer getReviewerList(){
        return null;
    }

    @PutMapping("/{reviewerID}")
    @ApiResponse(code=200,message = "리뷰어 정보를 업데이트 합니다.",response = Reviewer.class)
    public Reviewer updateReviewer(@PathVariable String reviewerID,@RequestBody Reviewer reviewer){
        return null;
    }

    @DeleteMapping("/{reviewerID}")
    @ApiResponse(code=200,message = "리뷰어 정보를 삭제합니다. 이 때 리뷰어와 연관된 다른 데이터 또한 삭제됩니다.",response = boolean.class)
    public boolean deleteReviewer(@PathVariable String reviewerID){
        return false;
    }
}
