FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY client/package*.json client/
RUN cd client && npm install

COPY server/package*.json server/
RUN cd server && npm install

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

# Change ownership of node_modules to node user
RUN chown -R node:node /app/server/node_modules

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000