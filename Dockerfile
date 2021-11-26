FROM node:12-alpine

RUN mkdir /app
WORKDIR /app

ADD . .

RUN npm install
