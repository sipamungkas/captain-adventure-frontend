# captain-adventure

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy with Docker Compose

```bash
# clone the repository
$ git clone https://github.com/mauldoto/nuxt-captadventure.git

# go to app dir
$ cd nuxt-captadventure

# set production environment variable
$ cp production.env.example production.env
$ nano production.env

# dont change this value
HOST=0.0.0.0

# change with backend api
BASE_API_URL=https://yourbackendapi.com

# run docker compose
$ docker-compose up -d
```

### docker compose logs
```bash
# see the logs of docker-compose
$ docker-compose logs -f
```

For detailed explanation on how things work, check out [Docker docs](https://docs.docker.com/) and [Docker Compose docs](https://docs.docker.com/compose/).
