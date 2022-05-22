const router = require('express').Router();
// const {checkuser } = require('../middelware/authmiddelware');
const Leadsdata = require("../models/leadsData.model");

//error handeling function

const handleError = (err)=>{
    console.log(err,err.code);
    let errors = {leadName: "", mobileNumber:""};

    if(err.message.includes("Leadsdata validation failed")){
        console.log(err.errors);
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]= properties.message
        })
    }
    return errors
}

// router.route('*').get(checkuser)

router.get('/',(req,res)=>{
     Leadsdata.find()
        .then(leadsData => res.json({leadsData}))
        .catch(err => {
             res.status(400).json("Error: " + err);
        });
})

router.post('/add',(req,res)=>{
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
     newLeadsData.save()
        .then(() => res.json('Data added successfully!'))
        .catch(err=>{
            const errors = handleError(err);
            res.status(400).json({errors})
        })
});


router.delete('/:id',(req,res)=>{
    const found = Leadsdata.some(leads => leads.id === parseInt(req.params.id))

    if(found){
        res.json({msg: 'Member deleted', leads: Leadsdata.filter(leads => leads.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: ' bad request id not found'})
    }
})


module.exports = router;