package com.example.clinicaltrialsystem.Review.Exception;

public class InvalidDataNumberException extends Exception{
    public static final String MESSAGE="데이터 범위에 적합하지 않은 번호를 호출하였습니다," +
            "0 ~ (전체 데이터 갯수 - 1)에 해당하는 번호를 호출해주세요.";
    public InvalidDataNumberException() {
        super(MESSAGE);
    }
}
