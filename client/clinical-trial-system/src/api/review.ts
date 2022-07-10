import axios from "axios";

// 리뷰어 번호 할당
const assignReviewerNumber = (onSuccess: (reviewerCount: number) => void) => {
    const url = '/api/reviewer';

    axios.post(url)
        .then(response => {
            onSuccess(response.data.reviewerId);
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
            onSuccess();
        })
        .catch(error => console.log(error));
};

export {assignReviewerNumber, getImageNumberList, saveOriginalReviewResult};