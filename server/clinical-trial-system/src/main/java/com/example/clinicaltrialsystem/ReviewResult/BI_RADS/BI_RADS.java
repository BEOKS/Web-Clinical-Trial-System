package com.example.clinicaltrialsystem.ReviewResult.BI_RADS;

public enum BI_RADS {
    NEGATIVE("1","Negative"),
    BENIGN("2", "Benign"),
    PROBABLY_BENIGN("3", "Probably benign"),
    LOW_SUSPICION_OF_MALIGNANCY("4a", "Low suspicions for malignancy"),
    MODERATE_SUSPICION_FOR_MALIGNANCY("4b", "Moderate suspicion for malignancy"),
    HIGH_SUSPICION_FOR_MALIGNANCY("4c", "High suspicion for malignancy"),
    HIGHLY_SUGGESTIVE_OF_MALIGNANCY("5", "Highly suggetive of malignancy");

    BI_RADS(String number, String description) {

    }
}
