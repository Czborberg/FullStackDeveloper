# FullStackDeveloper
Helpful commandlines

Set up new react environment:
cd some_folder_name
npm install

Start application:
npm run dev

Start application with an enviroment variable (Has to start with VITE_):
export VITE_ENVIROMENT_VARIABLE=12345 && npm run dev

Access environment variable:
import.meta.env.VITE_ENVIROMENT_VARIABLE

Install json-server globally:
npm install -g json-server

Run global json-server:
json-server --port 3001 --watch db.json

Add json-server as development dependency, so it can be run using npm run server:

npm install json-server --save-dev
And add the following to the scripts part of the package.json file:
 "server": "json-server -p3001 --watch db.json"

Install axios:
npm install axios