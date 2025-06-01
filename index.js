const jsonServer = require("json-server"); //to import json-server

//server creation
const recipeServer = jsonServer.create();

//setup path for db.json file
const router = jsonServer.router("db.json");

//setup middleware
const middleware = jsonServer.defaults();

//define a port for running json.server
const PORT = 3000 || process.env.PORT;

//use middleware and router
recipeServer.use(middleware);
recipeServer.use(router);

recipeServer.listen(PORT, () => {
  console.log(recipeServer is successfully running in port :- ${PORT});
});