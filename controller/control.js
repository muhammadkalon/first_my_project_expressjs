import { read_file, write_file } from "../fs/fs.js";

import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const user = {
  GET: (req, res) => {
    const user = read_file("users.json");

    res.end(JSON.stringify(user, null, 2));
  },

  POSTLOGIN: async (req, res) => {
    const users = read_file("users.json");
    const { email, password } = req.body;

    // Avval foydalanuvchini topamiz
    const user = users.find((user) => user.email === email);

    // Foydalanuvchi topilmagan bo'lsa
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi mavjud emas" });
    }

    // Parol xato bo'lsa
    if (user.password !== password) {
      return res.status(404).json({ message: "Parol xato" });
    }

    // Foydalanuvchi va parol to'g'ri bo'lsa
    let token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "SECRET_KEY",
      { expiresIn: "5m" }
    );

    console.log(user.id, user.email, "kirdi");
    return res.json({ token });
  },

  POST: (req, res) => {
    const new_user = req.body;
    const user = read_file("users.json");
    const uuid = uuidv4();
    const user_find = user.find((user) => user.email === new_user.email);

    if (user_find) {
      return res.end("mavjud");
    }

    user.push({
      id: uuid,
      name: new_user.name,
      age: new_user.age,
      email: new_user.email,
      password: new_user.password,
    });
    write_file("users.json", user);
    console.log(new_user.name, new_user.email);

    res.end(`${(new_user.name, new_user.email)} qo'shildi`);
    //  console.log(user);
  },

  PUT: (req, res) => {
    const user = read_file("users.json");
    const { name, age, email, password } = req.body;
    const id = req.params.id;
    const updatedUser = user.find((user) => user.id === id);

    if (updatedUser) {
      updatedUser.name = name || updatedUser.name;
      updatedUser.age = age || updatedUser.age;
      updatedUser.email = email || updatedUser.email;

      write_file("users.json", user);
      res.end(`Foydalanuvchi o'zgartirildi`);
    }
    return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  },

  DELETE: (req, res) => {
    const user = read_file("users.json");
    const id = req.params.id;
    const updatedUser = user.filter((user) => user.id !== id);
    write_file("users.json", updatedUser);
    res.end(`Foydalanuvchi o'chirildi`);
  },
};

export default user;
