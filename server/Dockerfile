# For static server and gateway, we will use nginx
# If authentiaction need for MAS we will change it to webflux or oauth-proxy

# Get necessary server file for deployment
FROM openjdk:11-jre-slim as was

ARG DEPENDENCY=./clinical-trial-system/build/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app
ARG PROFILE
ENV PROFILE $PROFILE
RUN echo -Dspring.profiles.active=$PROFILE
ENTRYPOINT java -cp app:app/lib/* com.beamworks.clinicaltrialsystem.ClinicalTrialSystemApplication --spring.profiles.active=$PROFILE

