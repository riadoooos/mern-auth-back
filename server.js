import http from "http";
import app from "./app/app.js";

//create the server
const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT, console.log(`Server turn on port ${PORT}`));
/* mongod --port 27017 --dbpath G:\Dbs\59-pos-api --logpath G:\Dbs\59-pos-api\mongod_27017.log */
/* maybe mongo --port 27017 */
