FROM node:alpine3.19 AS api

WORKDIR /api
COPY package*.json .
COPY .env .
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"]


