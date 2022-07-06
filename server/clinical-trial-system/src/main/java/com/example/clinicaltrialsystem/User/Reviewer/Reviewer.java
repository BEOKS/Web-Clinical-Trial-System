package com.example.clinicaltrialsystem.User.Reviewer;

import com.example.clinicaltrialsystem.User.User.UserProfile;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;

enum RadiologistSpecialty{
    BREAST_RADIOLOGY("Breast Radiology"),
    GENERAL_RADIOLOGY("General Radiology"),
    BREAST_SURGERY("Breast Surgery"),
    OB_GYN(" OB/GYN"),
    RADIOLOGIST_RESIDENT("Radiology Resident"),
    OTHERS("Others");

    RadiologistSpecialty(String description) {

    }
}
enum ExperienceYear{
    ZERO_TO_FIVE("0 - 5 year"),
    MORE_THAN_FIVE("more than 5 years")
    ;

    ExperienceYear(String description) {

    }
}
@Entity
@ApiModel("Reviewer")
public class Reviewer {
    @Id
    @ApiModelProperty(name = "Unique radiologistID", position = 1, example = "7aaee0e2-6884-4fd7-ba63-21d76723dce2")
    protected String radiologistID;
    @ApiModelProperty(name = "radiology specialty", position = 1, example = "Breast Radiology")
    protected RadiologistSpecialty radiologistSpecialty;
    protected boolean isBreastFellowshipTrained;
    protected ExperienceYear experienceYear;
    @OneToOne
    protected UserProfile userProfile;
}
