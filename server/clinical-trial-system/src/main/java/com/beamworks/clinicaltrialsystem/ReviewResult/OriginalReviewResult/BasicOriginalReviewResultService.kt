package com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import com.beamworks.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto.CreateOriginalReviewResultDto
import com.beamworks.clinicaltrialsystem.ReviewResult.Exception.CannotFindByID
import org.springframework.stereotype.Service

@Service
class BasicOriginalReviewResultService
    (private val originalReviewResultRepository: OriginalReviewResultRepository) : OriginalReviewResultService{
    override fun getResultWith(dataId: Int, reviewerId: Int): OriginalReviewResult {
        with(originalReviewResultRepository.findById(OriginalReviewResultId(dataId,reviewerId))){
            if(isEmpty) throw CannotFindByID
            return get()
        }
    }

    override fun saveResult(result: CreateOriginalReviewResultDto) {
        with(result){
            originalReviewResultRepository
                .save(OriginalReviewResult(OriginalReviewResultId(dataId,reviewerId),bi_rads,pom,verifyTime))
        }
    }
}