FROM nginx:1.15.1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY /dist /usr/share/nginx/html
