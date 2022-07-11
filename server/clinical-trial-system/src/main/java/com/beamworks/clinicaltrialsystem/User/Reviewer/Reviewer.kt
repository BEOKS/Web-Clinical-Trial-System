package com.beamworks.clinicaltrialsystem.User.Reviewer

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


enum class ExperienceYear(val description: String){
    ZERO_TO_FIVE("0 - 5 year"),
    MORE_THAN_FIVE("more than 5 years")
}
@Entity
data class Reviewer(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Int?,
    val experienceYear: ExperienceYear,
    val isSpecialty: Boolean

) {
    constructor() : this(null,ExperienceYear.ZERO_TO_FIVE,false
        ) {

    }
}