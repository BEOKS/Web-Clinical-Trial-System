package com.beamworks.clinicaltrialsystem.ReviewResult.BI_RADS;

import javax.persistence.AttributeConverter;

public class BI_RADSAttributeConverter implements AttributeConverter<String,Integer> {
    @Override
    public Integer convertToDatabaseColumn(String attribute) {
        return null;
    }

    @Override
    public String convertToEntityAttribute(Integer dbData) {
        return null;
    }
}
