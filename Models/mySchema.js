import mongoose from "mongoose";

let realData1Schema = new mongoose.Schema({
    id: String,
    AirFlowA: {

        type: Number,
        required: true

    },

    AirFlowB: {
        type: Number,
        required: true
    },
    PressureA:
    {
        type: Number,
        required: true
    },
    PressureB: {
        type: Number,
        required: true
    },
    ProdFlowA: {
        type: Number,
        required: true
    },
    ProdFlowB: {
        type: Number,
        required: true
    },
    BackFlowA: {
        type: Number,
        required: true
    },
    BackFlowB: {
        type: Number,
        required: true
    }
});


let realData2Schema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    AutoMode: {
        type: Number,
        required: true
    },
    ManualMode: {
        type: Number,
        required: true
    },
    Bloweron: {
        type: Number,
        required: true
    },
    FeedPmpAon: {
        type: Number,
        required: true
    },
    FeedPmpBon: {
        type: Number,
        required: true
    },
    SctnPmpAon: {
        type: Number,
        required: true
    },
    SctnPmpBon: {
        type: Number,
        required: true
    },
    BkWashPmpAon: {
        type: Number,
        required: true
    },
    BkWashPmpBon: {
        type: Number,
        required: true
    },
    PdtPmpAon: {
        type: Number,
        required: true
    },
    PdtPmpBon: {
        type: Number,
        required: true
    },
    FdLowLvlSens: {
        type: Number,
        required: true
    },
    FdHighLvlSens: {
        type: Number,
        required: true
    },
    FdHighHighLvlSens: {
        type: Number,
        required: true
    }
});


let realData3Schema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    VentFnAErr: {
        type: Number,
        required: true
    },
    VentFnBErr: {
        type: Number,
        required: true
    },
    FeedPmpATrp: {
        type: Number,
        required: true
    },
    FeedPmpBTrp: {
        type: Number,
        required: true
    },
    SuctnPmpATrp: {
        type: Number,
        required: true
    },
    SuctnPmpBTrp: {
        type: Number,
        required: true
    },
    BkwshPmpATrp: {
        type: Number,
        required: true
    },
    BkwshPmpBTrp: {
        type: Number,
        required: true
    },
    pdtpmpATrp: {
        type: Number,
        required: true
    },
    pdtpmpBTrp: {
        type: Number,
        required: true
    }

});

let realData1Model=mongoose.model("realData1",realData1Schema);
let realData2Model=mongoose.model("realData2",realData2Schema);
let realData3Model=mongoose.model("realData3",realData3Schema);



export {realData1Model,realData2Model,realData3Model};
// export default {realData1Model,realData2Model,realData3Model};