FROM node:22-alpine

ARG TIME_ZONE=Asia/Tokyo

ENV TZ=${TIME_ZONE}

RUN apk update && \
    apk add --no-cache git