const DonateThings = require('../models/DonatingThings');


exports.donatethings = async (req ,res , next) => {


    const {values} = req.body

    const firstName = values.firstName ;
    const lastName= values.lastName ;
    const email = values.email;
    const phone = values.phone ;
    const addressLine1 = values.addressLine1;
    const addressLine2 = values.addressLine2;
    const city  = values.city;
    const state = values.state;
    const thing = values.thing;
    const date = Date.now();
    const status = false;

    try {
        const donate = await DonateThings.create({
            status, firstName,lastName,email,phone,addressLine1,addressLine2,city,state,thing,date
        });
        res.status(201).json({success : true})
        console.log("Donations form submitted"); 

    } catch (error) {
        console.log(error);
        next(error);
    }

    
}
