# devpet_nodets

### PRÉ-REQUISITOS
`npm install -g nodemon typescript ts-node`

### INSTALAÇÃO
`npm install`

### RODAR PROJETO
`npm run start-dev`

## criar os conf iniciais: ##

cria no git e clona ele pra máquina
git clone [endereço do git]

npm init
tsc --init

##### config tsconfig #############
"target": "es6",
"outDir": "./dist", 
"rootDir": "./src",
"moduleResolution": "node",

###### BAIXAR DEPENDENCIAS #############
npm install express mustache-express dotenv
npm install --save-dev @types/express @types/mustache @types/node
npm i --save-dev @types/mustache-express