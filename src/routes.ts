import express, { Router } from "express";
import { categories, products } from "./data";

const router = Router();

router.get("/categories", (req, res) => {
  return res.send(categories);
});

router.get("/categories/:id(\\d+)", (req, res, next) => {
  const categoryId = Number(req.params.id);
  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );

  if (!selectedCategory) {
    return res.status(404).send(`Cannot GET /api/categories/${categoryId}`);
  }
  return res.send(selectedCategory);
});

router.post("/categories/category", (req, res) => {
  req.body = {
    id: 5,
    name: "Dessert",
  };

  categories.push(req.body);

  return res.send(req.body);
});

router.get("/products", (req, res) => {
  return res.send(products);
});

router.post("/products/product", (req, res) => {
  req.body = {
    id: 9,
    name: "Babà",
    img: "https://pastaypizzagrossi.com/wp-content/uploads/2019/02/storia-bab%C3%A0.jpg",
    category_id: 5,
  };

  if (categories.find((item) => item.id === req.body.category_id)) {
    products.push(req.body);
    return res.send(req.body);
  } else return res.status(400).send("Category does not exist");
});

export default router;
