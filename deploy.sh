#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New version'
git push -f https://github.com/HappyFlowerPinkPower/images-app.git master:pages

cd -