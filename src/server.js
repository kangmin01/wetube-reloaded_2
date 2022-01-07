import express from "express";

const PORT = 4000;
const app = express();

const gossipMiddleware = (req,res,next) => {
    console.log(`Someone is going to : ${req.url}`);
    next();
}

const handleHome = (req,res) => {
    return res.send("I love middlewares!");
};

app.get("/",handleHome);
app.use(gossipMiddleware);

const handelListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT,handelListening);