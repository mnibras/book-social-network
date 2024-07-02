# Stage 1: Build the Java App with maven
FROM maven:3.8.7-openjdk-18 AS build

WORKDIR /build

COPY pom.xml .

RUN mvn dependency:go-offline

COPY src ./src

RUN mvn clean package -DskipTests

# Stage 2:  Run the Java Application
FROM openjdk:17-alpine

# Default values if not passed during docker build
ARG PROFILE=dev
ARG APP_VERSION

WORKDIR /app

COPY --from=build /build/target/book-network-api-*.jar /app/

ENV DB_URL=jdbc:postgresql://postgres-sql-bsn:5432/book-social-network
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}
ENV EMAIL_HOST_NAME: missing_host_name
ENV EMAIL_USER_NAME: missing_user_name
ENV EMAIL_PASSWORD: missing_password

EXPOSE 8088

CMD java -jar book-network-api-${JAR_VERSION}.jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL}

