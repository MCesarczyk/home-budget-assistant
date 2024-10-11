######################################################
# Builder image, install all needed packages
######################################################
# Install dependencies only when needed
FROM docker.io/node:lts-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app
COPY dist/apps/server/package*.json ./

# install extracted deps
RUN npm install --only=production

# install additional deps
RUN npm install reflect-metadata tslib rxjs sqlite3 mysql2 pg

######################################################
# Production image, copy all the files and run nest
######################################################
FROM docker.io/node:lts-alpine AS runner

LABEL org.opencontainers.image.title="home-budget-assistant nestjs server"
LABEL org.opencontainers.image.url="https://github.com/MCesarczyk/home-budget-assistant"
LABEL org.opencontainers.image.source=https://github.com/MCesarczyk/home-budget-assistant
LABEL org.opencontainers.image.description="NestJS REST API for the Home Budget Asistatnt application"
LABEL org.opencontainers.image.licenses=MIT

RUN apk add --no-cache dumb-init

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app
COPY dist/apps/server/package*.json ./

# install extracted deps
RUN npm install --only=production

# install additional deps
RUN npm install reflect-metadata tslib rxjs sqlite3 mysql2 pg

######################################################
# Production image, copy all the files and run nest
######################################################
FROM docker.io/node:lts-alpine AS prod

LABEL org.opencontainers.image.title="home-budget-assistant nestjs server"
LABEL org.opencontainers.image.url="https://github.com/MCesarczyk/home-budget-assistant"
LABEL org.opencontainers.image.source=https://github.com/MCesarczyk/home-budget-assistant
LABEL org.opencontainers.image.description="NestJS REST API for the Home Budget Assistant application"
LABEL org.opencontainers.image.licenses=MIT

RUN apk add --no-cache dumb-init

ENV HOST=0.0.0.0
ENV PORT=3333

EXPOSE ${PORT}

WORKDIR /usr/src/app

# pull in packages from builder stage
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json

# copy local, compiled app
COPY dist/apps/server .
RUN chown -R node:node .
USER node

CMD ["dumb-init", "node", "main.js"]
