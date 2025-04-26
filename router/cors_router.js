import express from "express";

import  {userMiddleware, userMiddleware_put, userMiddleware_login, userMiddleware_delete}  from "../middleware/user.middleware.js";
import control from "../controller/control.js";
import user from "../controller/control.js";
import { userValidationLogin } from "../validation/user.validetion.js";


const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - name
 *         - age
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *         name:
 *           type: string
 *           description: The user name
 *         age:
 *           type: number
 *           description: The user age
 *         islogin:
 *           type: boolean
 *           description: The user islogin
 *
 *       example:
 *         email: Nowel@gmail.com
 *         password: 123
 *         name: dyftu
 *         age: 123
 */

/**
 * @swagger
 * /registor:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
*         200:
*           description: The user was successfully created
*           content:    
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/User'
*         500:    
*           description: Some server error   
 */
router
  .post("/registor",userMiddleware, control.POST)
  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Yangi User qo'shish
   *     tags: [User]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 description: Foydalanuvchi emaili
   *                 password:
   *                   type: string
   *                   description: Foydalanuvchi paroli
   *     responses:
   *       201:
   *         description: Muvaffaqiyatli yaratildi
   *       400:
   *         description: Noto'g'ri ma'lumot
   */
  .post("/login", control.POSTLOGIN);
/**
 * @swagger
 * /users:
 *  get:
 *     summary: Barcha UserPlus ma'lumotlarini olish
 *     tags: [UserPlus]
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli ma'lumotlar olindi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Foydalanuvchi ID si
 *                   name:
 *                     type: string
 *                     description: Foydalanuvchi ismi
 *                   email:
 *                     type: string
 *                     description: Foydalanuvchi emaili
 *                     password:
 *                       type: string
 *                       description: Foydalanuvchi paroli
 *                     age:
 *                       type: string
 *                       description: Foydalanuvchi yoshi
 *
 */
router.get("/users", control.GET)
/**
 * @swagger
 * /userput:
 *   put:
 *     summary: UserPlus ma'lumotlarini yangilash
 *     tags: [UserPlus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: Foydalanuvchi ID si
 *               name:
 *                 type: string
 *                 description: Yangilangan foydalanuvchi ismi
 *               email:
 *                 type: string
 *                 description: Yangilangan foydalanuvchi emaili
 *                 password:
 *                   type: string
 *                   description: Yangilangan foydalanuvchi paroli
 *                 age:
 *                   type: string
 *                   description: Yangilangan foydalanuvchi yoshi
 * 
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: Foydalanuvchi ID si yangilandi
 *                 name:
 *                   type: string
 *                   description: Yangilangan foydalanuvchi ismi
 *                 email:
 *                   type: string
 *                   description: Yangilangan foydalanuvchi emaili
 *                   password:
 *                     type: string
 *                     description: Yangilangan foydalanuvchi paroli
 *                   age:
 *                     type: string
 *                     description: Yangilangan foydalanuvchi yoshi
 *       500:    
 *         description: Noto'g'ri ma'lumot
 */
router.put("/userput", userMiddleware_put,control.PUT)

/**
 * @swagger
 * /userdelete:
 *   delete:
 *     summary: UserPlus ma'lumotlarini o'chirish
 *     tags: [UserPlus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 description: Foydalanuvchi ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli o'chirildi
 *       404:    
 *         description: Foydalanuvchi topilmadi
 */
  router.delete("/userdelete", userMiddleware_delete,control.DELETE);
export default router;
