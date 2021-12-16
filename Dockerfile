FROM ubuntu:focal
RUN apt update 
RUN apt install nodejs -y
RUN apt install npm -y

COPY src .
RUN npm -v

ENTRYPOINT [ "node", "run" ]

