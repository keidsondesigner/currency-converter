FROM node:latest as angular
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/currency-converter /usr/share/nginx/html

EXPOSE 80
