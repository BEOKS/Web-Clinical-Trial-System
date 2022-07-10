package com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto.CreateOriginalReviewResultDto
import org.springframework.stereotype.Service
@Service
interface OriginalReviewResultService {
    fun getResultWith(dataId: Int, reviewerId: Int): OriginalReviewResult
    fun saveResult(result: CreateOriginalReviewResultDto)
}