FROM node:15.13.0-alpine

WORKDIR /app

ADD . ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]