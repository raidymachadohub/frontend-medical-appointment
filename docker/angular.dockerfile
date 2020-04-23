FROM node:10.16

RUN apt-get update && \
    npm install -g @angular/cli

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm install
RUN npm rebuild node-sass --force

CMD ng serve --host 0.0.0.0 --poll=500

EXPOSE 80
