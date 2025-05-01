import router from "../router/cors_router";
import {
  userValidationPost,
  userValidationPut,
  userValidationLogin,
  userValidationDelete,

} from "../validation/user.validetion";

router.post("/login", async (req, res) => {
  const { error } = userValidationLogin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  res.status(200).send("Foydalanuvchi kiritildi");
});


router.put("/userput", async (req, res) => {
  const { error } = userValidationPut(req.body);
  res.status(201).send("Foydalanuvchi o'zgartirildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});

router.post("/register", async (req, res) => {
  const { error } = userValidationPost(req.body);
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
