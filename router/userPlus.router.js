import exspress from "express"
import userPlus from "../controller/userPlus.controller.js";
import {productMiddleware, product_middleware_put, product_middleware_delete } from "../middleware/product.middleware.js";
const router = exspress.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - productCategory
 *         - ptype
 *         - name
 *         - price
 *         - description
 *       properties:
 *         productCategory:
 *           type: string
 *           description: maxsulot kategoriyasi
 *         ptype:
 *           type: string
 *           description: The user password
 *         name:
 *           type: string
 *           description: The user name
 *         price:
 *           type: number
 *           description: The user age
 *         description:
 *           type: string
 *           description: maxsulot haqida ma'lumot
 *       example:
 *         productCategory: telefon
 *         ptype: Redmi
 *         name: redmi 9
 *         price: 1300000
 *         description: maxsulot haqida ma'lumot
 *         
 */
/**
 * @swagger
 * /userPlusProduct:
 *   post:
   *     summary: Yangi User qo'shish
   *     tags: [product]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           $ref: '#/components/schemas/Product'
   *     responses:
   *       201:
   *         description: Muvaffaqiyatli yaratildi
   *       400:
   *         description: Noto'g'ri ma'lumot
   */
router.post("/userPlusProduct",productMiddleware, userPlus.POST)

/**
 * @swagger
 * /userPlusGET:
 *  get:
 *    summary: Barcha UserPlus ma'lumotlarini olish
 *    tags: [UserPlus]
 *    responses:
 *      200:
 *        description: Muvaffaqiyatli ma'lumotlar olindi
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: Foydalanuvchi ID si
 *                  productCategory:
 *                    type: string
 *                    description: maxsulot toifasi
 *                  ptype:
 *                    type: string
 *                    description: maxsulotning turini
 *                  name:
 *                    type: string
 *                    description: maxlumotning nomi
 *                  description:
 *                    type: string
 *                    description: maxsulot haqida ma'lumot
 *                  price:
 *                    type: string
 *                    description: maxsulot narxi
 */
router.get("/userPlusGET", userPlus.GET)



/**
 * @swagger
 * /productUpdate:
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
 *               - productCategory
 *               - ptype
 *               - name
 *               - price
 *               - description
 *             properties:
 *               id:
 *                 type: string
 *                 description: maxsulotni id si
 *               productCategory:
 *                 type: string
 *                 description: maxsulot toifasi
 *               ptype:
 *                 type: string
 *                 description: maxsulotning turini
 *               name:
 *                 type: string
 *                 description: maxlumotning nomi
 *               description:
 *                 type: string
 *                 description: maxsulot haqida ma'lumot
 *               price:
 *                 type: string
 *                 description: maxsulot narxi
 *                  
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli yangilandi
 *       404:
 *         description: Foydalanuvchi topilmadi
 */
router.put("/productUpdate", product_middleware_put, userPlus.PUT)

/**
 * @swagger
 * /userPlusDELETE:
 *   delete:
 *     summary: UserPlus ma'lumotlarini o'chirish
 *     tags: [UserPlus]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: UserPlus ID si
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli o'chirildi
 *       404:
 *         description: Foydalanuvchi topilmadi
 */
router.delete("/productDELETE", product_middleware_delete, userPlus.DELETE)


export default router; 