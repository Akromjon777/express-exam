import express from "express"
import dotenv from "dotenv"
import fileUpload from "express-fileupload"
import categoriesRouter from "./router/categoriesRouter.js"
import userRouter from "./router/userRouter.js"
import subCategoriesRouter from "./router/subCategoriesRouter.js"
import productRouter from "./router/productRouter.js"
import { errorHandlerMiddlewares } from "./middlewares/error.middlewares.js"
dotenv.config()
const app = express()
app.use(fileUpload())
app.use(express.json());
app.use(userRouter)
app.use(categoriesRouter)
app.use(subCategoriesRouter)
app.use(productRouter)
app.use(errorHandlerMiddlewares);
app.all("/*", (req, res, next) => {
  res.status(500).json({
    message: req.url + " is not found",
  });
});
app.listen(9090, console.log(9090))