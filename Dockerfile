FROM node:12.10.0-alpine

LABEL maintainer="dannyguo91@gmail.com"

# Avoid "x509: certificate signed by unknown authority" errors
RUN apk --no-cache add ca-certificates

ENV HUGO_VERSION 0.60.1
ENV HUGO_BINARY_URL https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

WORKDIR /tmp
RUN wget ${HUGO_BINARY_URL} && \
    tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
    mv hugo /usr/local/bin && \
    rm *

WORKDIR /home/node
COPY package.json yarn.lock ./
RUN yarn install

# so that we can use the installed executables from any directory
ENV PATH ${PATH}:/home/node/node_modules/.bin
# so that the executables know where to look up dependencies
ENV NODE_PATH /home/node/node_modules

WORKDIR /src

EXPOSE 1313
