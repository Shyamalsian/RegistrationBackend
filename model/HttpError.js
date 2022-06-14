const { model } = require("mongoose")

class HttpError extends Error
{
    constructor(message,ecode){
        super(message)
        this.code=ecode
    }
}
module.exports = HttpError