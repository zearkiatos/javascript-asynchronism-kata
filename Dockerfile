FROM node:18-alpine

RUN apk update
RUN apk add python3 make g++
RUN apk add --update nodejs npm

WORKDIR /app

COPY . .

RUN npm install

CMD npm run test