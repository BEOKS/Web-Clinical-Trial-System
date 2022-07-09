package com.example.clinicaltrialsystem.ReviewResult.OriginalReviewResult.Dto

data class CreateOriginalReviewResultDto(val dataId:Int,
                                         val reviewerId:Int,val bi_rads:String
                                         ,val pom: Int, val verifyTime: Long)