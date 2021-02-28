FROM node:14.16.0-alpine
WORKDIR /app
COPY ["package.json","package.lock.json*","./"]
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3001
ENV BASE_API_URL=api.captain-adventure.com
CMD [ "npm","start" ]
