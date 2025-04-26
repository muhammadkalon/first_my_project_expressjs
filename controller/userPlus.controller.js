import { v4 as uuidv4 } from "uuid";
import { read_file, write_file } from "../fs/fs.js";


const userPlus = {
  GET: (req, res) => {
    const Product = read_file("Product.json");
  res.json(Product);
},
 
  POST: (req, res) => {
    const new_product = req.body
    const userPlus = read_file("users.json");
    const user_find = userPlus.find((user) => user.id === new_product.id);
    const Product = read_file("Product.json");
    const uuid = uuidv4();
    console.log(user_find.email, "siz malumot qo'shmoqchisiz");
if (user_find) {
  
  Product.push({
    userPlus_id: new_product,
    id: uuid,
    productCategory:  new_product.prductproductCategory,
    ptype:  new_product.ptype,
    price:  new_product.price,
    description:  new_product.description,
  });
  write_file("Product.json", Product);
  console.log(user_find.email, "maxsulotingiz muvaffaqiyatli qo'shildi");
 return res.json({ bolen: true});
}
res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  },

  PUT: (req, res) => {
    const Product = read_file("Product.json");
    const { id, productCategoty, ptype, name, price, description} = req.body
    const updatedProduct = Product.find((Product) => Product.id === id);

   if (updatedProduct) {
    updatedProduct.id
      updatedProduct.productCategory = productCategoty || updatedProduct.prductproductCategory;
      updatedProduct.ptype = ptype|| updatedProduct.ptype;
      updatedProduct.name = name || updatedProduct.name;
      updatedProduct.price = price || updatedProduct.price;
      updatedProduct.description = description || updatedProduct.description;
      write_file("Product.json", Product);

      res.json({bolen: true});
    } 
  },

  DELETE: (req, res) => {
    const Product = read_file("Product.json");
    const  {id}  = req.body
    if (Product) {
      const delete_product = Product.filter((user) => user.id !== id);
      write_file("Product.json", delete_product);
      res.end(`Masulot muvaffaqiyatli o'chirildi`);
     
    } else {
      return res.status(404).json({ message: "masulot topilmadi" });
    }
  },
};

export default userPlus;
