import {productValidationPost, productValidationPut, productValidationDelete} from "../validation/product.validetion.js";

export const productMiddleware = function (req, res, next)  {
        const { error } = productValidationPost(req.body);
        
        if (error) {
            console.log(error);
            return res.status(400).json({ message: error.details[0].message });
        }
    next()
    };

    export const product_middleware_put = function (req, res, next)  {
        const { error } = productValidationPut(req.body);
        
        if (error) {
            console.log(error);
            return res.status(400).json({ message: error.details[0].message });
        }
    next()
    };

    export const product_middleware_delete = function (req, res, next)  {
        const { error } = productValidationDelete(req.body);
        
        if (error) {
            console.log(error);
            return res.status(400).json({ message: error.details[0].message });
        }
    next()
    };

    
