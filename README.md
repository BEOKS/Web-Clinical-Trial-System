# Web Clinical Trial System
CTS(Clinical Trail System) aim convenient and effective Machine Learning Clinical Trial and Testbed Management.

> This project is not implemented yet.
# Feature
1. [Overview](./docs/overview.md)
2. [Authentication and Role selection(PI/REVIEWER)](./docs/Authentication_and_Choose_Rule.md)
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
      2. Review with Sample Data(3.3.3)
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
# Requirement
1. Install [Docker](https://docs.docker.com/get-docker/)>=20.10.10
2. Install [NodeJS](https://nodejs.org/ko/download/)>=v16.15.1
3. Insatll [Open JDK](https://openjdk.org/install/)>=11.0.11

# Build & Run
If you run build script, it will build client and server project at the same time, and create docker image with build information. Build and Run script has 3 option for develop and production.
1. **local** : For personal develop environment, If you want develop new feature or fix bugs etc., you have to use this option.
2. **dev** : For merge, test in real environment, if you pull request to dev branch and approved, GitHub Action automatically test with dev option.
3. **prod** : For real service environment, this option is for publish in real environment, it will close docker port(like database) except client and server connection for user.
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

Docker prevent provisioning and reduce repetitive configuration each host. By using docker, We can expect same operation for local, dev and production environment. If we handle multi container in multi host we will use Kubernetes for container orchestration.

 <img src="https://img.shields.io/badge/React-61DAFB?&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Jest-C21325?&logo=Jest&logoColor=white"> <img src="https://img.shields.io/badge/Testing Library-E33332?&logo=Testing Library&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Vite-646CFF?&logo=Vite&logoColor=white"> 
 
 As React is useful for create reusable component we use React Framework and typescript for implement web based client program. Also we target 100% test coverage in client, we use jest for logic test and React Testing Library for User event. For fast development experience we use Vite. 

 <img src="https://img.shields.io/badge/OpenJDK-2496ED?&logo=OpenJDK&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?&logo=Spring Boot&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F?&logo=Spring Security&logoColor=white">  <img src="https://img.shields.io/badge/JUnit5-25A162?&logo=JUnit5&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?&logo=MySQL&logoColor=white"> <img src="https://img.shields.io/badge/Hibernate-59666C?&logo=Hibernate&logoColor=white">

 As java running by JVM which guarantee stable software running environment like Auto Optimization and GC, We select java for server system. We use Spring Framework For effective and safe develop in Java development environment. And we target 100% test coverage, so use JUnit5 and JaCoCo.

 # Architecture
 Basically, We use Monolithic Architecture, because we now aim Fast Implement-Fast Feedback cycle. MSA(Microservice Architecture) is good for scale out, independent development and maintenance. But, it require many management like monitoring, configuration for each MSA component and Troubleshooting etc. If we make feature stable and need to handle scaling out per feature or features are look like grow up, We will migrate to MSA.
 
 For that, We use SoC(Separation of Concern) design structure and multi module project. Simply, all code files for same feature need to store in same project of module. So we can migrate to MSA relatively easily.

 In client, we will use Flux design pattern with React & Redux. Because we suffer from deep props... In server, we will use Controller-Service-Repository design pattern.

# Author
1. [Jaeseong Lee](https://github.com/BEOKS), lee01042000@gmail.com
# Developer
1. Jaeseong Lee, lee01042000@gmail.com
2. Dohee Kim, doheedev@gmail.com



