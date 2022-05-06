const router = require('express').Router();
const { requireAuth } = require('../middelware/authmiddelware');
let Leadsdata = require("../models/leadsData.model");


router.route('/').get(requireAuth,(req,res)=>{
    Leadsdata.find()
        .then(leadsData => res.json(leadsData))
        .catch(err => res.status(400).json("Error: "+ err));
})

router.route('/add').post( async (req,res)=>{
    const leadName = req.body.leadName;
    const mobileNumber=Number(req.body.mobileNumber)
    const email=req.body.email;
    
    const requirenment=req.body.requirenment;
    const quickNote=req.body.quickNote;

    const newLeadsData = new Leadsdata({
        leadName,
        mobileNumber,
        email,
        requirenment,
        quickNote
    });
    await newLeadsData.save()
        .then(() => res.json('Data added successfully!'))
        .catch(err => res.status(400).json({ error: err , data: false}))
});

module.exports = router;