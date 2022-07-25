import axios from "axios";
import {EXPERIENCE_YEAR, SPECIALITY} from "../component/Review/ReviewerReducer";

// 리뷰어 정보 저장 및 리뷰어 번호 할당
const assignReviewerNumber = (experienceYear: typeof EXPERIENCE_YEAR.ZERO_TO_FIVE | typeof EXPERIENCE_YEAR.MORE_THAN_FIVE,
                              speciality: typeof SPECIALITY.BREAST_RADIOLOGY | typeof SPECIALITY.GENERAL_RADIOLOGY |
                                  typeof SPECIALITY.BREAST_SURGERY | typeof SPECIALITY.OB_OR_GYM |
                                  typeof SPECIALITY.RADIOLOGY_RESIDENT | typeof SPECIALITY.OTHERS,
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

// @ts-ignore
export {assignReviewerNumber, getImageNumberList, saveOriginalReviewResult, saveMLReviewResult};