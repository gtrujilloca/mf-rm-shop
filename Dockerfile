### Stage 1: Build ###
FROM node:20-alpine AS build
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# RUN corepack prepare pnpm@9.4.0 --activate
WORKDIR /usr/src/app
# COPY ["package*.json", "pnpm-lock.yaml", "/usr/src/app/"]
COPY ["package*.json", "/usr/src/app/"]
RUN npm install
COPY . /usr/src/app/
ARG configuration=production
RUN npm run build --configuration=$configuration

### Stage 2: Server ###
FROM nginx:alpine AS server
EXPOSE 80
COPY --from=build ./usr/src/app/dist/shop/browser /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
