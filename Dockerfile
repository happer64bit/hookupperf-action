FROM node:21

COPY . /app
WORKDIR /app
RUN npm install

CMD ["node", "dist/index.js"]