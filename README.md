# Cloud-Based-CRF
Machine Learning Clinical Trial Management Platform

> This project is not implement yet.
# Feature
1. [Overview](./docs/overview.md)
2. [Autehtication and Choose Rule(PI/REVIEWER)](./docs/Authentication_and_Choose_Rule.md)
3. Project Management For PI
   1. Reviewer Management
      1. Check User Tutorial Participation
      2. *C.R.U.D Reviewer
   2. Session Management 
      1. Session Create & Configuration
         1. Set Session Schedule
         2. Session Start/Stop
         3. Open/Close Session Data Ground Truth
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
      1. Evaluate with Original Clinical Image
      2. Store Evaluation Time
      3. Evaluate with ML Result
      4. Check Ground Truth After Session Review
      5. Check Quota
      6. Pause/Restart Review

*CRUD : Create, Read, Update, Delete
# Usage
> We will prepare guide book later.
# Prerequirement
1. Install [Docker](https://docs.docker.com/get-docker/)>=20.10.10
2. Install [NodeJS](https://nodejs.org/ko/download/)>=v18.2.0
3. Insatll [Open JDK](https://openjdk.org/install/)>=17.0.1

# Build & Run
If you run build script, it will build client and server project at the same time, and create docker image with build information. Build and Run script has 3 option for develop and production.
1. **local** : For personal develop environment, If you want devlop new feature or fix bugs etc, you have to use this option
2. **dev** : For merge, test in real environment, if you pull request to dev branch and approved, Github Action automatically test with dev option
3. **prod** : For personal develop environment, this option is for publish in real environment, it will close docker port(like database) except client and server connection
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
## Production
If you run build script, it will automatically create docker image for production. After that, you can move docker image to anyware for you want and run ```run.sh```script.
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
2. Dohee Kim, doheedev@gmail.com
