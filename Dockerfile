FROM node:12.10.0-alpine

WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["node", "./src/server.js"]