package com.beamworks.clinicaltrialsystem.User.Reviewer.Dto

import com.beamworks.clinicaltrialsystem.User.Reviewer.ExperienceYear
import com.beamworks.clinicaltrialsystem.User.Reviewer.Reviewer
import com.beamworks.clinicaltrialsystem.User.Reviewer.Speciality

data class CreateReviewerDto(val isTrainedOrDedicated: Boolean,
                             val experienceYear: ExperienceYear,
                             val speciality: Speciality) {
    companion object{
        const val DESCRIPTION = "생성할 리뷰어의 정보는 JSON 형태로 전달이 가능합니다." +
                "아래에서 Model 을 클릭하면 전달할 값의 옵션을 확인할 수 있습니다." +
                "(현재 isTrainedOrDedicated(Boolean) 값이 Swagger 에 표시되지 않는 버그가" +
                "있습니다. JSON 내부에 \"isTrainedOrDedicated\" : true/false 를 추가하여 " +
                "아래 모델 값과 함께 전달이 가능합니다."
    }
    fun toReviewerEntity(): Reviewer=
        Reviewer(null,experienceYear,isTrainedOrDedicated,speciality)
}