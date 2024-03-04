# STAGE 1
FROM node:20-alpine as builder
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json yarn.lock ./

USER node
RUN yarn install
COPY --chown=node:node . .
RUN yarn build

# STAGE 2
FROM node:20-alpine as app

RUN apk add dumb-init

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json yarn.lock ./
USER node

RUN yarn --production --frozen-lockfile
COPY --from=builder /home/node/app/dist ./dist

ENV PORT 80

EXPOSE 80

CMD [ "dumb-init", "node", "dist/server.js" ]