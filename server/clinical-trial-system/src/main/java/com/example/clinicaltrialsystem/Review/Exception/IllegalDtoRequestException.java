package com.example.clinicaltrialsystem.Review.Exception;

public class IllegalDtoRequestException extends Exception{
    public static final String MESSAGE="요청 시 원본 이미지, ML 결과 이미지 그리고 노트의 내용이 필요합니다. " +
            "form-data 에 \n{ originalImage : file, mlResultImage: file, note: text } " +
            "형식으로 요청에 데이터를 담아 전송해주세요";
    public IllegalDtoRequestException(){
        super(MESSAGE);
    }
    public IllegalDtoRequestException(Object object){
        super(MESSAGE+"\n수신받은 데이터는 아래와 같습니다.\n"+object.toString());
    }
}
