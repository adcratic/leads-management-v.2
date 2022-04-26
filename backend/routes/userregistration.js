const router = require("express").Router();
let userRegistered = require("../models/userRegistration.model");


router.route("/register").post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const newuserRegistered = new userRegistered({
        username,
        password
    })
    newuserRegistered.save()
    .then(() => res.json('Data added successfully!'))
    .catch(err => res.status(400).json("Error: "+ err))
})

router.route("/login").post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    userRegistered.findOne({username: username}).then((foundUser)=>{
        if(foundUser){
            if(foundUser.password === password){
                res.status(200).json("Logged In!!")
            }else{
                res.status(400).json("Cant logged in")
            }
        }
    })
    .catch(err => res.status(400).json("Error: "+err));
        
})

module.exports =router;