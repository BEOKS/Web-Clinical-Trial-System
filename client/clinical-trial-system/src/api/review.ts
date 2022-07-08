import axios from "axios";

// 리뷰어 번호 할당
const assignReviewerNumber = (onSuccess: (reviewerCount: number) => void) => {
    const url = '/api/reviewer';

    axios.post(url)
        .then(response => {
            console.log(response);
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
            console.log(response);
            onSuccess(response.data);
        }).catch(error => {
        console.log(error);
    });
};

export {assignReviewerNumber, getImageNumberList};