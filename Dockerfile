FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

CMD ["yarn", "dev"]