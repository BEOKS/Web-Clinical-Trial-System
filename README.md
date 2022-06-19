# Cloud-Based-CRF
의료 인공지능 임상시험 진행/관리를 지원하는 플랫폼
# Feature
1. Overview
2. Autehtication and Choose Rule(PI/REVIEWER)
3. Project Management For PI
   1. Reveiwer Management
      1. Check User Tutorial Participation
      2. *C.R.U.D Reviewer
   2. Session Management 
      1. Session Create & Configuration
         1. Set Session Schedule
         2. Session Start/Stop
         3. Open/Close Session Data Groud Truth
         4. Check Participation Information in Session
      2. Session Monitoring
         1. Check User Evaluation Time
      3. Session Clinical Data Management
   3. Clinical Data Management
      1. Metadata
      2. DICOM Image
      3. Sample Data Management
4. Reviewer
   1. Tutorial For Review
      1. Guide
      2. Review with Sample Data(3.3.4)
   2. Review Clinical Data and AI Result
      1. Evaludate with Original Clinical Image
      2. Store Evaluation Time
      3. Evaludate with ML Result
      4. Check Ground Truth After Session Review
      5. Check Quota
      6. Pause/Restart Review

*CRUD : Create, Read, Update, Delete
# Usage
> 가이드북 참고 예정
# Prerequirement
1. [Docker](https://docs.docker.com/get-docker/) 20.10.10 버전 이상 설치
2. [NodeJS](https://nodejs.org/ko/download/) v18.2.0 이상 설치
3. [Open JDK](https://openjdk.org/install/) 18 이상 설치

# Build & Run
설치 및 실행은 3가지 옵션으로 통해서 가능하다.
1. local : 개인이 개발할 때 사용
2. dev : 배포전 배포와 같은 환경에서 테스트 할 때 사용
3. prod : 실제 서비스를 운영하기 위해 사용
## 1. On Mac
```
sudo bash ./build.sh {prod|dev|local}
sudo bash .run.sh
```
## 2. On Windows
```
bash ./build.sh {prod|dev|local}
sudo bash .run.sh
```
# Used Framework & Language
<img src="https://img.shields.io/badge/Docker-2496ED?&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/OpenJDK-2496ED?&logo=OpenJDK&logoColor=white">
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?&logo=Spring Boot&logoColor=white">
<img src="https://img.shields.io/badge/Spring Security-6DB33F?&logo=Spring Security&logoColor=white">
<img src="https://img.shields.io/badge/JUnit5-25A162?&logo=JUnit5&logoColor=white">

<img src="https://img.shields.io/badge/React-61DAFB?&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Jest-C21325?&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/Testing Library-E33332?&logo=Testing Library&logoColor=white">

# Developer
1. Jaeseong Lee, lee01042000@gmail.com
2. Dohee Kim, 
