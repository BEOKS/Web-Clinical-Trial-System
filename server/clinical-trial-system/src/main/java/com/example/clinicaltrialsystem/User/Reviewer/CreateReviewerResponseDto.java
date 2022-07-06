package com.example.clinicaltrialsystem.User.Reviewer;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.Serializable;

class CreateReviewerResponseDto implements Serializable {
    int reviewerId;

    public CreateReviewerResponseDto(int reviewerId) {
        this.reviewerId = reviewerId;
    }

    public int getReviewerId() {
        return reviewerId;
    }

    public void setReviewerId(int reviewerId) {
        this.reviewerId = reviewerId;
    }
}
