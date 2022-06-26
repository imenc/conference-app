FROM node:12
LABEL maintainer="imenc@live.com"
ENV PORT 3000

# Create app directory
RUN mkdir -p /app/fe
WORKDIR /app/fe

# Installing dependencies
COPY ./package*.json /app/fe/package.json
RUN npm install

# Copying source files
COPY . /app/fe

# Building app
# RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "dev"