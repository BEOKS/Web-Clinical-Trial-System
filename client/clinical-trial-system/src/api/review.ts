/**
 * @file 리뷰 관련 API를 작성합니다.
 * @author 김도희 <doheedev@gmail.com>
 */

import axios from "axios";
import {EXPERIENCE_YEAR, SPECIALITY} from "../component/Review/ReviewerReducer";


/**
 * 서버에 리뷰어 정보를 전송하고, 할당받은 리뷰어 번호를 수신하기 위한 API입니다.
 * 수신한 리뷰어 번호를 사용하기 위해서 비동기로 호출되는 callback 화살표 함수를 사용할 수 있습니다.
 * @param experienceYear
 * @param speciality
 * @param isTrainedOrDedicated
 * @param callback - 리뷰어 번호를 성공적으로 수신한 경우 파라미터로 넘겨주는 화살표 함수입니다. 만약 리뷰어 번호를 가져오는 데 에러가 발생했다면 0을 넘겨줍니다.
 */
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


/**
 * 리뷰할 이미지 번호 리스트를 받아오기 위한 API입니다.
 * 수신한 이미지 번호 리스트를 사용하기 위해서 비동기로 호출되는 callback 화살표 함수를 사용할 수 있습니다.
 * @param callback - 이미지 번호 리스트를 성공적으로 수신한 경우 파라미터로 넘겨주는 화살표 함수입니다. 만약 이미지 번호 리스트를 가져오는 데 에러가 발생했다면 빈 배열을 넘겨줍니다.
 */
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


/**
 * 원본 초음파 이미지 리뷰 결과와 측정 시간을 서버로 전송하기 위한 API입니다.
 * 전송에 성공했다면 비동기 callback 함수를 사용하여 '새로운 시간 측정 시작'과 같은 동작을 할 수 있습니다.
 * @param biRads
 * @param dataId
 * @param pom
 * @param reviewerId
 * @param verifyTime
 * @param callback
 */
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


/**
 * ML 결과 이미지에 대한 리뷰 결과와 측정 시간을 서버로 전송하기 위한 API입니다.
 * 전송에 성공했다면 비동기 callback 함수를 사용하여 '새로운 시간 측정 시작'과 같은 동작을 할 수 있습니다.
 * @param biRads
 * @param confidenceLevel
 * @param dataId
 * @param pom
 * @param reviewerId
 * @param verifyTime
 * @param callback
 */
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