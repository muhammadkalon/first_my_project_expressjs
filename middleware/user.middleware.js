import  {userValidation, userValidationPut, userValidationLogin, userValidationDelete}  from "../validation/user.validetion.js";

export const userMiddleware_login = function (req, res, next)  {
  const { error } = userValidationLogin(req.body);

  if (error) {
    console.log(error);
    return res.status(400).json({ message: error.details[0].message });
  }
next()
}

export const userMiddleware = function (req, res, next)  {
    const { error } = userValidation(req.body);
  
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
  next()
  };


  export const userMiddleware_put = function (req, res, next)  {
    const { error } = userValidationPut(req.body);
  
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
  next()
  };

  export const userMiddleware_delete = function (req, res, next)  {
    const { error } = userValidationDelete(req.body);
  
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
  next()
  };