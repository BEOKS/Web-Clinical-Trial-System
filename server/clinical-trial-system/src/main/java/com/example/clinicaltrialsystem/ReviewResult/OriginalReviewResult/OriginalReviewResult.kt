package com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import javax.persistence.Embeddable
import javax.persistence.EmbeddedId
import javax.persistence.Entity
@Embeddable
class OriginalReviewResultId(var dataId: Int?,var reviewerId: Int?): java.io.Serializable {
    constructor() : this(null,null)
}

@Entity
data class OriginalReviewResult(
    @EmbeddedId
    var originalReviewResultId: OriginalReviewResultId,
    var biRads:String="",
    var pom: Int=0,
    var verifyTime:Long=0
) {
    constructor() : this(OriginalReviewResultId(), "",0,0)
}