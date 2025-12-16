FROM node:25-slim AS builder
LABEL "language"="nodejs"
LABEL "framework"="nuxt.js"

ENV NITRO_PRESET="static"

WORKDIR /src
COPY . .
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile
RUN pnpm run generate

FROM zeabur/caddy-static AS server
EXPOSE 8080
COPY --from=builder /src/.output/public /usr/share/caddy
