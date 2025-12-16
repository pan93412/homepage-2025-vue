FROM node:25-slim
LABEL "language"="nodejs"
LABEL "framework"="vite"

WORKDIR /src
COPY . .
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile
RUN pnpm run generate

FROM zeabur/caddy-static
EXPOSE 8080
COPY --from=0 /src/.output/public /usr/share/caddy