FROM node:11.11-alpine

ENV NODE_ENV=production

EXPOSE 3000

COPY . /home/node/app

WORKDIR /home/node/app

RUN npm ci \
    && chown node:node -R . 

CMD [ "npm", "start" ]
