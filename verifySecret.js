const verifySecret = (req,res,next) => {
    const api_key = "a1b2c3d4e5f67890123456789abcdef"
    const SHIPPING_SECRET_KEY = req.headers["shipping_secret_key"]
    if(!SHIPPING_SECRET_KEY){
        res.status(403).send({ 
            "error": "SHIPPING_SECRET_KEY is missing or invalid"
            })
    }
    if(api_key != SHIPPING_SECRET_KEY){
        return res.status(403).send({ 
            "error": "Failed to authenticate SHIPPING_SECRET_KEY"
        })
    }
    next()
}
module.exports = verifySecret