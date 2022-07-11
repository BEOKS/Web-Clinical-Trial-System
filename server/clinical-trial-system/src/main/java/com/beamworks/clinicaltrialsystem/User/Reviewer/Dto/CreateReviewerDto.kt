package com.beamworks.clinicaltrialsystem.User.Reviewer.Dto

import com.beamworks.clinicaltrialsystem.User.Reviewer.ExperienceYear
import com.beamworks.clinicaltrialsystem.User.Reviewer.Reviewer

data class CreateReviewerDto(val isSpeciality : Boolean,
                             val experienceYear: ExperienceYear) {
    companion object{
        const val DESCRIPTION = "리뷰어 정보는 아래와 같은 JSON 형태로 전송 할 수 있습니다.(Swagger Example 은 버그입니다.)\n" +
                "{\n" +
                "\t\"experienceYear\": \"ZERO_TO_FIVE\"/\"MORE_THAN_FIVE\"\n" +
                "\t\"isSpeciality\": true/false\n" +
                "}"
    }
    fun toReviewerEntity(): Reviewer= Reviewer(null,experienceYear,isSpeciality)
}