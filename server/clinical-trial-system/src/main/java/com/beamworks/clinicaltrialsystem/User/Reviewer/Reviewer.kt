package com.beamworks.clinicaltrialsystem.User.Reviewer

import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonValue
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

enum class ExperienceYear(val description: String){
    ZERO_TO_FIVE("0~5 years"),
    MORE_THAN_FIVE("more than 5 years");

    @JsonCreator
    open fun from(value: String?): ExperienceYear? {
        for (status in ExperienceYear.values()) {
            if (status.getValue().equals(value)) {
                return status
            }
        }
        return null
    }
    @JsonValue
    open fun getValue(): String? {
        return description
    }
}
enum class Speciality(val description: String){
    BREAST_RADIOLOGY("Breast Radiology"),
    GENERAL_RADIOLOGY("General Radiology"),
    BREAST_SURGERY("Breast Surgery"),
    OB_OR_GYM("OB/GYN"),
    RADIOLOGY_RESIDENT("Radiology Resident"),
    OTHERS("Others");
    @JsonCreator
    open fun from(value: String?): Speciality? {
        for (status in Speciality.values()) {
            if (status.getValue().equals(value)) {
                return status
            }
        }
        return null
    }
    @JsonValue
    open fun getValue(): String? {
        return description
    }
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