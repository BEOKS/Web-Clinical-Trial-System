package com.beamworks.clinicaltrialsystem.ReviewResult.MLReviewResult.Dto

data class CreateMLReviewResultDto(val dataId:Int,
                                   val reviewerId:Int,val bi_rads:String
                                   ,val pom: Int, val verifyTime: Long,
                                    val confidenceLevel : Int)