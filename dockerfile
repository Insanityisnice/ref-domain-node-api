FROM node:8.6-alpine

LABEL com.example.version="0.0.1-beta" \
      com.example.description="Provide a description for the image" \
      com.example.maintainer="An email address for the maintainer for the image" \
      com.example.vendor="Stackware" \
      com.example.release-date="2017-09-30" \
      com.example.is-beta=""

# When the container is ready for production the com.example.is-beta 
# lable needs to be changed to the is-production lable shown below.
#      com.example.is-production=""

RUN groupadd -r domain-group && useradd --no-log-init -r -g domain-group domain-user

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Only copy the package files and run npm install. 
# This prevents the node_modules from being downloaded
# for every change.
COPY ./package*.json /usr/src/app/
RUN npm install

ENV API_PORT="8080" \
    API_HOST="express"

COPY . /usr/src/app

EXPOSE 8080

USER domain-user

ENTRYPOINT [ "npm" ]
CMD [ "start" ]