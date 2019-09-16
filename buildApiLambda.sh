#/bin/sh
rm ./test/api/airports.js
rm ./test/src/data/models.js
npx tsc --outDir test ./api/airports.ts   