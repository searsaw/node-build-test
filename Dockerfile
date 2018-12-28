FROM node:10-alpine

ENV NODE_ENV=production

EXPOSE 8000

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY build build

CMD [ "yarn", "start" ]
