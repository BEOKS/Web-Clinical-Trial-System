package com.example.clinicaltrialsystem.User.Reviewer;

import com.example.clinicaltrialsystem.User.User.User;
import lombok.AllArgsConstructor;

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
public class Reviewer extends User{
    @Id
    protected String radiologistID;
    protected RadiologistSpecialty radiologistSpecialty;
    protected boolean isBreastFellowshipTrained;
    protected ExperienceYear experienceYear;
}
