FROM node:13.12.0-alpine as build-step
RUN mkdir /app
ENV REACT_APP_API_URL=http://localhost:5002/api
RUN echo -e "REACT_APP_API_URL=${REACT_APP_API_URL}" > .env.production
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:1.20.1-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 8080
