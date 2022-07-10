package com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import org.springframework.data.repository.CrudRepository

interface OriginalReviewResultRepository:
    CrudRepository<OriginalReviewResult,OriginalReviewResultId> {
}