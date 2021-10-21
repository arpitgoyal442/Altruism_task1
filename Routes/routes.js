import express from "express";
import { realData1Model, realData2Model, realData3Model } from "../Models/mySchema.js"


const router = express.Router();


// //**   Task 1    *** */
// router.post("/data1", (req, res) => {


//     res.send(req.body);
// });

// router.post("/data2", (req, res) => {

//     console.log(req.body.A1);
//     res.send(req.body);
// })

// //** Task 1 End */




//**** TASK 2 */

router.get("/", (req, res) => {
    res.send("This is temp Response");
})

router.post("/realdata1", async (req, res) => {



    let newdata = new realData1Model(req.body);

    await newdata.save((err, data) => {
        if (err)
            res.send(err);

        else res.send(data);
    })


});

router.post("/realdata2", async (req, res) => {

    let newdata = new realData2Model(req.body);

    await newdata.save((err, data) => {
        if (err)
            res.send(err);

        else res.send(data);
    })

}
);

router.post("/realdata3", async (req, res) => {
    let newdata = new realData3Model(req.body);

    await newdata.save((err, data) => {
        if (err)
            res.send(err);

        else res.send(data);
    })
});


router.get("/data", async (req, res) => {

    let id = req.query.id[0];
    let ans = {
        status: {},
        system_faults: {},
        analog_data: {}
    };

    await realData1Model.findOne({}, {}, { sort: { 'created_at': -1 } }, (err, data) => {

        if (err)
            res.send(err);

        else {
            if (data)
                ans.status = data;


        }


    }).clone().catch(function (err) { console.log(err) });

    await realData2Model.findOne({}, {}, { sort: { 'created_at': -1 } }, (err, data) => {

        if (err)
            res.send(err);

        else {
            if (data)
                ans.system_faults = data;


        }


    }).clone().catch(function (err) { console.log(err) });

    await realData3Model.findOne({}, {}, { sort: { 'created_at': -1 } }, (err, data) => {

        if (err)
            res.send(err);

        else {
            if (data)
                ans.analog_data = data;


        }


    }).clone().catch(function (err) { console.log(err) });

    res.send(ans);




})




export default router;