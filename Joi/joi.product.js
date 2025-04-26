import router from "../router/userPlus.router";
import {
  productValidation,
  productValidationPut,
  productValidationDelete,
} from "../validation/product.validetion";

router.post("/userPlusProduct", async (req, res) => {
  const { error } = productValidation(req.body);
  res.status(201).send("Maxsulot qo'shildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});

router.put("/productUpdate", async (req, res) => {
  const { error } = productValidationPut(req.body);
  res.status(201).send("masulotlar o'zgartirilgan");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});

router.delete("/productDELETE", async (req, res) => {
  const { error } = productValidationDelete(req.body);
  res.status(201).send("masulot o'chirildi");
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
});
