#!/bin/bash

# navigate to app folder
cd /app

# install dependencies
export NODE_OPTIONS=--openssl-legacy-provider
npm install
npm run build
cp -r build/* /var/www/html
npm install pm2 -g
