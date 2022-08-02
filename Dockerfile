# define the base configuration - a standard node container should do the job
FROM node:14-alpine3.11 AS install

WORKDIR /pepe/store/
COPY package.json package-lock.json .babelrc ./
RUN npm ci --progress=false

FROM install as build

COPY src/ src/
RUN npm run build

COPY webpack.config.js ./
ENV NODE_ENV=production
RUN npm run webpack
RUN npm prune

COPY public/ public/

FROM build as production
ENV IMAGE_SERVER_URL=http://image-server:781
ENV PRODUCT_SERVER_URL=http://product-server:777
ENV ORDER_FULFILLMENT_URL=http://fulfillment:790
ENV PORT=80

EXPOSE 80

CMD [ "npm", "start"]




