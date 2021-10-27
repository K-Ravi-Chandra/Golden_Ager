const User = require('../models/User');

exports.getPrivateData = async (req, res, next) => {


            res.status(200).json({
                sucess : true,
                data : " You got acess to private data in this route ! Hurray"
            })



}