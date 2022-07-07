package com.example.clinicaltrialsystem.Review.Exception;

public class InternalServerException extends Exception{
    public static final String MESSAGE="처리 과정 중 서버 내부에서 오류가 발생했습니다. " +
            "관리자에게 문의바랍니다.";

    public InternalServerException() {
        super(MESSAGE);
    }
}
