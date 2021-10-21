// Importing Stuff
import express from "express"
import bodyParser from "body-parser"
import router from "./Routes/routes.js"
import mongoose from "mongoose"
import cors from "cors"


//App Stuff
const app = express();


// Functions

  // To convert text data to JSON
function convertTextToJson(text,keys) {

    let obj = {};
    let id = text.slice(1, 5);

    obj.id = id;

    text = text.substring(6);
    let k = 1;
    while (text.length != 0) {

        let c = text.indexOf(",");
        if (c == -1)
            break;

        let str = text.substring(0, text.indexOf(","));
        obj[keys[k]] = parseFloat(str);
        k++;
        let index = text.indexOf(",");

        if (index == -1)
            break;

        text = text.substring(index + 1);

    }
    obj[keys[k]] = parseInt(text.substring(0, text.length));

    return obj;



}


//Middlewares
app.use(bodyParser.text());
app.use(cors());

//Database Stuff
const password= "5qGcCjqJQ27uoXwN";
mongoose.connect("mongodb+srv://admin:5qGcCjqJQ27uoXwN@cluster0.va1ff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db=mongoose.connection;
db.once("open",()=>{console.log("DB is Connected Successfully !!")});


app.use("/data1", (req, res, next) => {

    let text = req.body;
    // let len=text.length;

    let obj = {};
    let id = text.slice(1, 5);

    obj.id = id;
    console.log(id);

    text = text.substring(6);
    let k = 1;
    while (text.length != 0) {

        let c = text.indexOf(",");
        if (c == -1)
            break;

        let str = text.substring(0, text.indexOf(","));
        obj["D" + "" + k] = parseInt(str);
        k++;
        let index = text.indexOf(",");

        if (index == -1)
            break;

        text = text.substring(index + 1);

    }
    obj["D" + k] = parseInt(text.substring(0, text.length));

    req.body = obj;
    next();




})


app.use("/data2", (req, res, next) => {

    let text = req.body;

    let obj = {};
    let id = text.slice(1, 5);

    obj.id = id;


    text = text.substring(6);
    let k = 1;
    while (text.length != 0) {

        let c = text.indexOf(",");
        if (c == -1)
            break;

        let str = text.substring(0, text.indexOf(","));
        obj["A" + "" + k] = parseFloat(str);
        k++;
        let index = text.indexOf(",");

        if (index == -1)
            break;

        text = text.substring(index + 1);

    }
    obj["A" + k] = parseInt(text.substring(0, text.length));

    req.body = obj;
    next();

})

app.use("/realdata1", (req, res, next) => {

    let keys = ["id",
        "AirFlowA",
        "AirFlowB",
        "PressureA",
        "PressureB",
        "ProdFlowA",
        "ProdFlowB",
        "BackFlowA",
        "BackFlowB"
    ];

    req.body = convertTextToJson(req.body,keys);
    next();


})

app.use("/realdata2", (req, res, next) => {

    let keys = [
        "id",
        " AutoMode",
        " ManualMode",
        "Bloweron",
        "FeedPmpAon",
        "FeedPmpBon",
        "SctnPmpAon",
        "SctnPmpBon",
        "BkWashPmpAon",
        "BkWashPmpBon",
        "PdtPmpAon",
        "PdtPmpBon",
        "FdLowLvlSens",
        "FdHighLvlSens",
        "FdHighHighLvlSens"
    ];

   

    req.body = convertTextToJson(req.body,keys);
    next();



});

app.use("/realdata3", (req, res, next) => {

    let keys = [
        "id",
        "VentFnAErr",
        "VentFnBErr",
        "FeedPmpATrp",
        "FeedPmpBTrp",
        "SuctnPmpATrp",
        "SuctnPmpBTrp",
        "BkwshPmpATrp",
        "BkwshPmpBTrp",
        "pdtpmpATrp",
        "pdtpmpBTrp"

    ];
    let text = req.body;

    req.body = convertTextToJson(text,keys);
    next();


})



//Routes
app.use(router);



//Listeners
app.listen(3000, () => { console.log("Server Running on port 3000") });




