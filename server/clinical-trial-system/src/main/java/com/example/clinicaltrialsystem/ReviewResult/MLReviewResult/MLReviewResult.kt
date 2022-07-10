package com.example.clinicaltrialsystem.ReviewResult.MLReviewResult

import javax.persistence.Embeddable
import javax.persistence.EmbeddedId
import javax.persistence.Entity

@Embeddable
data class MLReviewResultId(var dataId: Int,var reviewerId: Int): java.io.Serializable {
    constructor() : this(-1,-1)
}

@Entity
data class MLReviewResult(
    @EmbeddedId
    var mlReviewResultId: MLReviewResultId,
    var biRads: String,
    var pom: Int=0,
    var verifyTime:Long=0,
    var confidenceLevel: Int=0
) {
    constructor() : this(MLReviewResultId(),"",0,0,0) {

    }
}