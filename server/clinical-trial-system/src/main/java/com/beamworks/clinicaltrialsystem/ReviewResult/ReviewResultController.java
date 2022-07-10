package com.beamworks.clinicaltrialsystem.ReviewResult;

import io.swagger.annotations.Api;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/review/result")
@Api(
        tags = "Control Review Result Information",
        description = "리뷰를 완료하고 생성된 BI-RADS, POM 그리고 측정 시간을 저장합니다."
)
public class ReviewResultController {

}
