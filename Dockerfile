FROM node:13.12.0-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --silent
RUN npm run build

FROM nginx:1.20.1-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 8080
