FROM node:21-alpine

COPY package*.json /

RUN npm ci

COPY src /src

CMD ["node", "/src/index.js"]