# Build Stage 1

FROM node:24-alpine AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

RUN corepack enable

# Copy package.json and your lockfile, here we add pnpm-lock.yaml for illustration
COPY package.json pnpm-*.yaml ./

# Install dependencies
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Copy the entire project
COPY . ./

# Build the project
ENV NITRO_PRESET=node-server
RUN pnpm run build

# Build Stage 2
FROM node:24-alpine AS prod
WORKDIR /app

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=8080
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["node", "/app/server/index.mjs"]
