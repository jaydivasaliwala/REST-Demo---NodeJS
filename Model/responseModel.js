const responseModel = (res,status_code, message, error_status, data) => {
    if(error_status === true)
    {
        res.status(500).json({
            status_code:500,
            data:null,
            message:"Server Error",
            error_status:error_status
        })
    }
    if(data == null)
    {
        res.status(200).json({
            status_code:204,
            data:data,
            message:"No data found",
            error_status:error_status
        })
    }
    const result = {
        status_code:status_code,
        data:data,
        message:message,
        error_status:error_status
    }
    res.status(status_code).json(result)
}

module.exports = {responseModel}