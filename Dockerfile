FROM node:20-alpine

WORKDIR /app

COPY . .

CMD npm run dev
