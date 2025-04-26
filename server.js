import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./router/cors_router.js";
import * as setupSwagger from "./swagger.js"
import userPlus from "./router/userPlus.router.js";




const app = express();
const port = process.env.PORT || 2020;



setupSwagger.setupSwagger(app);
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE,  OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);


app.use(express.json());
app.use(router);
app.use(userPlus);

app.listen(port, () => {
  console.log(`Server ishlayapti ${port}`);
});
