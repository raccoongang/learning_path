FROM node:14.15.0-stretch

LABEL tier=dev

ENV TERM xterm-256color
ENV NODE_ENV=development

RUN apt-get update && apt-get install -y \
    bash \
    apt-utils && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /code

RUN chown -R node:node /code

WORKDIR /code

USER node
