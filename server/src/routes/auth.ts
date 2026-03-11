import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email);
  if (existingUser) {
    return res.status(400).json({ message: "Пользователь уже существует" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.prepare("INSERT INTO users (email, password) VALUES (?, ?)").run(
    email,
    hashedPassword,
  );
  const user = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email) as any;

  const token = jwt.sign({ id: user.id }, "SECRET_KEY");
  res.json({ token });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const findUser = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email) as any;
  if (!findUser) {
    return res.status(400).json({ message: "Неверный email" });
  }

  const isPasswordValid = await bcrypt.compare(password, findUser.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Неверный пароль" });
  }

  const token = jwt.sign({ id: findUser.id }, "SECRET_KEY");
  res.json({ token });
});

export default router;
