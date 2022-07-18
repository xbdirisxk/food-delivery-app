import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../Models/userModel";

export const signUp = async (req: Request, res: Response) => {
  try {
    const userFound = await User.findOne({ username: req.body.username });
    const emailFound = await User.findOne({ email: req.body.email });
    if (userFound)
      return res.status(400).json({ error: "username already exist" });
    if (emailFound)
      return res.status(400).json({ error: "Email already exist" });
    if (!req.body.email.includes("@"))
      return res.status(400).json({ error: "incorrect Email format" });

    /* check password length */
    if (req.body.password.length < 7)
      return res
        .status(400)
        .json({ error: "password must be atleast 7 characters" });

    /* check password match */
    if (req.body.password !== req.body.confirmPassword)
      return res.status(400).json({ error: "password confirmation not match" });
    delete req.body.confirmPassword; // remove the passwordComfirm field after checked

    /* password encryption */
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = encryptedPassword;

    /* create user */
    await User.create(req.body);
    res.status(200).json({ success: "user created ✅" });
  } catch (err) {
    res.status(400).json({ error: "error" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res
        .status(400)
        .json({ error: "Username or Password is incorrect" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match)
      return res
        .status(400)
        .json({ error: "Username or Password is incorrect" });

    res.status(200).json({ success: "login sucessful" });
  } catch (err) {
    res.status(400).json({ error: "error" });
  }
};
