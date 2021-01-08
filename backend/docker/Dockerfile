FROM openjdk:8
ADD student-management-1.0.0.jar student-management-1.0.0.jar
RUN mkdir -p /var/log/student-management && touch /var/log/student-management/student-management.log
CMD java -jar student-management-1.0.0.jar > /var/log/student-management/student-management.log 2>&1
# CMD java -jar student-management-1.0.jar
