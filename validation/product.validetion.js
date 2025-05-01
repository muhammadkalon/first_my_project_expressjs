import Joi from "joi";

export const productValidationPost = (data) => {
    const schema = Joi.object({
        userPlus_id: Joi.string().required(),
        productCategory: Joi.string().min(3).required(),
        ptype: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        price: Joi.number().required(),
        description: Joi.string().min(3).required(),
    });
    return schema.validate(data);
}

export const productValidationPut = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        productCategory: Joi.string().min(3).required(),
        ptype: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        price: Joi.number().required(),
        description: Joi.string().min(3).required(),
    });
    return schema.validate(data);
}

export const productValidationDelete = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
    });
    return schema.validate(data);
}

// export default {productValidation ,productValidationPut }







