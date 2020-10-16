FROM node:alpine
WORKDIR /conf
RUN apk add --no-cache libc6-compat
EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]