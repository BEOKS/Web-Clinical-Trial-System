package com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult

import com.beamworks.clinicaltrialsystem.ReviewResult.Exception.CannotFindByID
import com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult.Dto.CreateMLReviewResultDto
import org.springframework.stereotype.Service

@Service
class MLReviewResultService
    (private val mlReviewResultRepository: MLReviewResultRepository) {
    fun getResultWith(dataId: Int, reviewerId: Int): MLReviewResult {
        with(mlReviewResultRepository.findById(MLReviewResultId(dataId, reviewerId))){
            if(isEmpty){
                throw CannotFindByID
            }
            return get()
        }
    }

    fun saveResult(createMLReviewResultDto: CreateMLReviewResultDto) {
        with(createMLReviewResultDto){
            mlReviewResultRepository.save(MLReviewResult(
                MLReviewResultId(dataId,reviewerId),bi_rads,pom,verifyTime,confidenceLevel))
        }
    }
}