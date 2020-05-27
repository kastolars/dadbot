FROM node:latest

RUN npm install discord.js

COPY . /usr/src/app

WORKDIR /usr/src/app

ENTRYPOINT ["node", "bot/index.js"]