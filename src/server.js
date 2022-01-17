/*
import express from "express";
import logger from "morgan";

const PORT = 4000;
const app = express();

const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req,res) => {
    return res.send("I love middlewares!");
}; 


app.get("/",logger,handleHome); 


const handelListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handelListening);

///////////////
*/
/*
import express from "express";

const PORT = 4000;
const app = express();

const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const privateMiddleware = (req,res,next) => {
    const url = req.url;
    if(url === "/protected"){  
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you may continue.");
    next();
}

const handleHome = (req,res) => {
    return res.send("I love middlewares!");
}; 

const handleProtected = (req,res) => {
    return res.send("Welcome to the private lounge.");
}

app.use(logger); 
app.use(privateMiddleware); 
 
app.get("/",handleHome); 
app.get("/protected",handleProtected);

const handelListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handelListening);

*/

import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const home = (req,res) => {
    console.log("I will respond.");
}

const login = (req,res) => {
    return res.send("login");
}; 

const handleHome = (req,res) => {
    return res.send("I love middlewares");
}

app.get("/", logger, handleHome);
app.use(logger);
app.get("/",home); 
app.get("/login",login);


const handelListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handelListening);