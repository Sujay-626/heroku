const joi =require('joi');

const registervalidation = (data)=>{
    const user = joi.object({
        name : joi.string().required(),
        email: joi.string().required().email(),
        password: joi.string().required().min(8),
        phno: joi.number().required()
    });
    return user.validate(data)
};

const loginvalidation = (data)=>{
    const check = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required().min(8),
        admin_id: joi.string()
    });
    return check.validate(data)
};

module.exports.registervalidation = registervalidation;
module.exports.loginvalidation = loginvalidation;