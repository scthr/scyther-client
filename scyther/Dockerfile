FROM node:19
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 1234
CMD [ "yarn", "parcel", "public/index.html" ]
