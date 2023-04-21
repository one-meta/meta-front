FROM node:lts AS builder

LABEL maintainer="贰拾壹 (https://github.com/er10yi)"

WORKDIR /build
COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .
RUN yarn build

FROM nginx:alpine


# COPY --from=builder /build/.nginx/default.conf /etc/nginx/templates/default.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /build/dist /usr/share/nginx/html

ENV TZ Asia/Shanghai