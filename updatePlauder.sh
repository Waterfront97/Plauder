#!/usr/bin/env bash

#Settings:
REPODIR="/home/websites/Plauder"
BRANCH="develop"

echo "Starting Plauder update"
cd $REPODIR
git checkout $BRANCH
git reset --hard HEAD
git pull
cd Server
npm install
cd ../Client
npm install
ng build --prod
cd $REPODIR
rm -rf Server/www/*
cp Client/dist/Client/* Server/www -R
service plauder restart
echo "Updated and restarted Plauder"