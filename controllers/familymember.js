


exports.getFinancialRequests  = async (req ,res , next) => {
    const volunter = req.body;

    console.log(volunter)

    if(!volunter){
        return next(new ErrorResponse("Please provide email address to fetch financial requests", 400))
    }
    else{
        try {
            const financialRequest = await FinancialRequest.find(volunter)
            if(!financialRequest){
                res.status(200).json({
                    success :true,
                    message: "No Financial Requests",
                    requests : "0"
                });
            }
            else{
                console.log(financialRequest)
                res.status(200).json({
                    success :true,
                    message: " Financial Requests Found",
                    requests : financialRequest
                });
            }
        } catch (error) {
            res.status(500).json({
                success :false,
                error: error.message,
            });
        }
    }

}

