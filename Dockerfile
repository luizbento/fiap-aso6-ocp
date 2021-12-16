FROM node:14-alpine3.12

COPY src .
RUN npm install

ENTRYPOINT [ "node", "index.js" ]