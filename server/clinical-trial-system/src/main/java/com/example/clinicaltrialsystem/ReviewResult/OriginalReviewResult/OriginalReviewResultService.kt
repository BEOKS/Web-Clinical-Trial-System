package com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto.CreateOriginalReviewResultDto
import org.springframework.stereotype.Service
@Service
interface OriginalReviewResultService {
    fun getResultWith(dataId: Int, reviewerId: Int): OriginalReviewResult
    fun saveResult(result: CreateOriginalReviewResultDto)
}