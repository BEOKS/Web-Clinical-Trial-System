package com.beamworks.clinicaltrialsystem.User.Reviewer;

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
