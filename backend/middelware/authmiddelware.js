const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //check json web token exists & is verified

    if (token) {
        jwt.verify(token, 'net varun secret', (err, decodeToken)=>{
            if (err) {
                console.log(err.message);
            } else {
                console.log(decodeToken);
                next();
            }
        })
    } else {
        res.status(400).json({unauthorized: true})
        
    }
}

module.exports = {requireAuth};