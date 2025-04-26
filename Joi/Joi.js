import router from "../router/cors_router";
import {
  userValidation,
  userValidationPut,
  userValidationLogin,
  userValidationDelete,
} from "../validation/user.validetion";

router.post("/registor", async (req, res) => {
  const { error } = userValidation(req.body);
  res.status(201).send("Foydalanuvchi qo'shildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});

router.put("/userput", async (req, res) => {
  const { error } = userValidationPut(req.body);
  res.status(201).send("Foydalanuvchi o'zgartirildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});
router.post("/login", async (req, res) => {
  const { error } = userValidationLogin(req.body);
  res.status(201).send("Foydalanuvchi qo'shildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});

router.delete("/userdelete", async (req, res) => {
  const { error } = userValidationDelete(req.body);
  res.status(201).send("Foydalanuvchi o'chirildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});
