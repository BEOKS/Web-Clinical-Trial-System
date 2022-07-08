package com.example.clinicaltrialsystem.ReviewData.Exception;

public class CannotFindByReviewId extends Exception{
    public static final String MESSAGE="주어진 Review 데이터 ID와 일치하는 데이터가 존재하지 않습니다.";
    public CannotFindByReviewId(){
        super(MESSAGE);
    }
}
