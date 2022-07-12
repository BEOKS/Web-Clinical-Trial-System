package com.beamworks.clinicaltrialsystem.User.Reviewer

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


enum class ExperienceYear(val description: String){
    ZERO_TO_FIVE("0 - 5 year"),
    MORE_THAN_FIVE("more than 5 years")
}
enum class Speciality(val description: String){
    BREAST_RADIOLOGY("Breast Radiology"),
    GENERAL_RADIOLOGY("General Radiology"),
    BREAST_SURGERY("Breast Surgery"),
    OB_OR_GYM("OB/GYN"),
    RADIOLOGY_RESIDENT("Radiology Resident"),
    OTHERS("others")
}
@Entity
data class Reviewer(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Int?,
    val experienceYear: ExperienceYear,
    val isTrainedOrDedicated: Boolean,
    val speciality: Speciality

) {
    constructor() : this(null,ExperienceYear.ZERO_TO_FIVE,
        false,Speciality.OTHERS) {

    }
}