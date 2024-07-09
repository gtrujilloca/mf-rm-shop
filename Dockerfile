### Stage 1: Build ###
FROM node:20-alpine AS install_deps
WORKDIR /usr/src/app
COPY ["package*.json", "/usr/src/app/"]
RUN npm install

FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY --from=install_deps /usr/src/app /usr/src/app/
COPY . /usr/src/app/
ARG configuration=production
RUN npm run build --configuration=$configuration

### Stage 2: Server ###
FROM nginx:alpine AS server
WORKDIR /usr/src/app
COPY --from=build ./usr/src/app/dist/shop/browser /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
