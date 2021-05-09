FROM node:alpine

WORKDIR /app

RUN npm install --global nodemon

COPY ./package.json /app/

RUN npm install

ENTRYPOINT npm run nodemon 