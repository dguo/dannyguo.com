FROM node:10.14.2-alpine

LABEL maintainer="dannyguo91@gmail.com"

ENV HUGO_VERSION=0.52
ENV HUGO_BINARY_URL=https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

WORKDIR /tmp

RUN wget ${HUGO_BINARY_URL} && \
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo /usr/local/bin && \
    rm *

WORKDIR /src

EXPOSE 1313
