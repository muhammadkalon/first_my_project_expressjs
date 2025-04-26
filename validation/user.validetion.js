import Joi from "joi";

export const userValidationLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(3).max(27).required(),
        password: Joi.string().min(2).required(),
    });
    return schema.validate(data);
}
export const userValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(3).max(27).required(),
        password: Joi.string().min(3).required(),
        age: Joi.string().min(2).max(3),
    });
    return schema.validate(data);
}

export const userValidationPut = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        name: Joi.string().min(3).required(),
        email: Joi.string().email().min(3).max(27).required(),
        password: Joi.string().min(3).required(),
        age: Joi.string().min(2).max(3),
    });
    return schema.validate(data);
}

export const userValidationDelete = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
    });
    return schema.validate(data);
}