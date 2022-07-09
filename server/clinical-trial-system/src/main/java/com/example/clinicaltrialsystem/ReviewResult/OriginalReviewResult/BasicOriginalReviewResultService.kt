package com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult

import com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto.CreateOriginalReviewResultDto
import com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Exception.CannotFindByID
import org.springframework.stereotype.Service
import java.util.*

@Service
class BasicOriginalReviewResultService
    (private val originalReviewResultRepository: OriginalReviewResultRepository) : OriginalReviewResultService{
    override fun getResultWith(dataId: Int, reviewerId: Int): OriginalReviewResult {
        with(originalReviewResultRepository.findById(OriginalReviewResultId(dataId,reviewerId))){
            if(isEmpty) throw CannotFindByID
            return get()
        }
    }

    override fun saveResult(result: CreateOriginalReviewResultDto): Unit {
        with(result){
            originalReviewResultRepository
                .save(OriginalReviewResult(OriginalReviewResultId(dataId,reviewerId),bi_rads,pom,verifyTime))
        }
    }
}