import axios from "axios";

// 리뷰어 정보 저장 및 리뷰어 번호 할당
const assignReviewerNumber = (experienceYear: "ZERO_TO_FIVE" | "MORE_THAN_FIVE", isSpeciality: boolean,
                              onSuccess: (reviewerCount: number) => void) => {
    const url = '/api/reviewer';
    const data = {
        experienceYear: experienceYear,
        isSpeciality: isSpeciality,
    };

    axios.post(url, data)
        .then(response => {
            onSuccess(response.data);
        }).catch(error => {
        console.log(error);
    });
};

// 리뷰 이미지 번호 리스트 GET
const getImageNumberList = (onSuccess: (imageNumberList: number[]) => void) => {
    const url = '/api/review/data/idList';

    axios.get(url)
        .then(response => {
            onSuccess(response.data);
        }).catch(error => {
        console.log(error);
    });
};

// 원본 이미지 리뷰 결과 저장
const saveOriginalReviewResult = (biRads: string, dataId: number, pom: number, reviewerId: number, verifyTime: number,
                                  onSuccess: () => void) => {
    const url = '/api/review/result/original';
    const data = {
        bi_rads: biRads,
        dataId: dataId,
        pom: pom,
        reviewerId: reviewerId,
        verifyTime: verifyTime,
    };

    axios.post(url, data)
        .then(response => {
            console.log(response);
            onSuccess();
        }).catch(error => console.log(error));
};

// ML 이미지 리뷰 결과 저장
const saveMLReviewResult = (biRads: string, confidenceLevel: number, dataId: number, pom: number,
                            reviewerId: number, verifyTime: number, onSuccess: () => void) => {
    const url = '/api/review/result/ml';
    const data = {
        bi_rads: biRads,
        confidenceLevel: confidenceLevel,
        dataId: dataId,
        pom: pom,
        reviewerId: reviewerId,
        verifyTime: verifyTime,
    };

    axios.post(url, data)
        .then(response => {
            console.log(response);
            onSuccess();
        }).catch(error => console.log(error));
}

export {assignReviewerNumber, getImageNumberList, saveOriginalReviewResult, saveMLReviewResult};