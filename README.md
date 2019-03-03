## setting Typescript Up
    1. yarn global add typescript
    2. tsconfig.json 파일추가
    3. yarn init
    4. package.json
        "scripts":{
            "start":"node index.js",
            "prestart": "tsc"
        }
        yarn start

## plugin
    tslint 설치

## yarn add tsc-watch --dev
    yarn add tsc-watch --dev

    "scripts": {
        "start": "tsc-watch --onSuccess \" node dist/index.js \""
     },

## dist, src 폴더 생성 후 package.json 수정

    {
        "name": "typescript",
        "version": "1.0.0",
        "main": "index.js",
        "repository": "https://github.com/jonsoku/typescript.git",
        "author": "jongseok <the2792@gmail.com>",
        "license": "MIT",
        "scripts": {
            "start": "tsc-watch --onSuccess \" node dist/index.js \""
        },
        "devDependencies": {
            "tsc-watch": "^2.1.2"
        }
    }

## tsconfig.json
    {
        "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true,
        "outDir": "dist"
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules"]
    }

## index.ts를 src폴더에 넣는다.

## yarn add typescript 터미널에서 한번 더 실행한다.

## yarn start