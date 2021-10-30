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


    console.log(values);

    


    // const {  firstName,lastName,email,phone,addressLine1,addressLine2,city,state,thing} = req.body;

    const date = Date.now();

    try {
        const donate = await DonateThings.create({
            firstName,lastName,email,phone,addressLine1,addressLine2,city,state,thing,date
        });
        res.status(201).json({success : true})
        console.log("Submitted Successfully"); 

    } catch (error) {
        console.log(error);
        next(error);
    }

    
}
