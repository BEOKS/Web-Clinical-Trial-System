import axios from "axios";


const assignReviewerNumber = (experienceYear: "ZERO_TO_FIVE" | "MORE_THAN_FIVE",
                              speciality: 'BREAST_RADIOLOGY' | 'GENERAL_RADIOLOGY' | 'BREAST_SURGERY' | 'OB_OR_GYM' | 'RADIOLOGY_RESIDENT' | 'OTHERS',
                              isTrainedOrDedicated: boolean,
                              callback: (reviewerCount: number) => void) => {
    const url = '/api/reviewer';
    const data = {
        experienceYear: experienceYear,
        speciality: speciality,
        isTrainedOrDedicated: isTrainedOrDedicated
    };

    axios.post(url, data)
        .then(response => {
            callback(response.data);
        }).catch(error => {
        alert(error);
        callback(0);
    });
};

// 리뷰 이미지 번호 리스트 GET
const getImageNumberList = (callback: (imageNumberList: number[]) => void) => {
    const url = '/api/review/data/idList';

    axios.get(url)
        .then(response => {
            callback(response.data);
        }).catch(error => {
        alert(error);
        callback([]);
    });
};

// 원본 이미지 리뷰 결과 저장
const saveOriginalReviewResult = (biRads: string, dataId: number, pom: number, reviewerId: number, verifyTime: number,
                                  callback: () => void) => {
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
            callback();
        }).catch(error => {
        alert(error);
        callback();
    });
};

// ML 이미지 리뷰 결과 저장
const saveMLReviewResult = (biRads: string, confidenceLevel: number, dataId: number, pom: number,
                            reviewerId: number, verifyTime: number, callback: () => void) => {
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
            callback();
        }).catch(error => {
            alert(error);
            callback();
    });
}

export {assignReviewerNumber, getImageNumberList, saveOriginalReviewResult, saveMLReviewResult};