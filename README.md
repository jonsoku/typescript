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
    5. 