FROM focal
RUN apt update & apt install node

COPY src .
RUN npm install

ENTRYPOINT [ "node", "run" ]

